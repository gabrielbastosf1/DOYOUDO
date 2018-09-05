import {Injectable, EventEmitter, NgZone} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../app/models/usuario';
import firebase from "firebase";
import { Credencial } from '../app/models/credencial';

@Injectable()
export class LoginProvider {
    currentUser:any;
    auth:boolean;
    loginSucess: EventEmitter<any>;
    loginFailed: EventEmitter<any>;
    logout:EventEmitter<any>;


    constructor(public http:Http, public ngZone: NgZone){
        this.loginSucess = new EventEmitter();
        this.loginFailed = new EventEmitter();
        this.logout = new EventEmitter();
        firebase.auth().onAuthStateChanged(usuario => {
            this.callbackStateChanged(usuario);
        })
    }      

    private callbackStateChanged(usuario){
        this.ngZone.run(()=>{
            if(usuario == null){
              this.currentUser = null;
              this.auth = false;  
            } else{
                this.currentUser = usuario;
                this.auth = true;   
            }
        })
    }

    registrarUser(credencial:Credencial){
        firebase.auth().createUserWithEmailAndPassword(credencial.email,credencial.senha)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

    loginComCredencial(credencial : Credencial){
        firebase.auth().signInWithEmailAndPassword(credencial.email,credencial.senha)
        .then(resultado => this.callbackSucessoLogin(resultado))
        .catch(error => this.callbackFalhaLogin(error))
    }

    loginComGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(resultado => this.callbackSucessoLogin(resultado))
        .catch(error => this.callbackFalhaLogin(error))
    }

    loginComFacebook(){
        let provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(resultado => this.callbackSucessoLogin(resultado))
        .catch(error => this.callbackFalhaLogin(error))
    }
    
    private callbackSucessoLogin(response){
        this.loginSucess.emit(response.user)
    }

    private callbackFalhaLogin(error){
        this.loginFailed.emit({code: error.code, message: error.message, email: error.email, credencial: error.credencial});
    }

}