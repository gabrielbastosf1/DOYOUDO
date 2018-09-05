import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { LoginProvider } from '../../providers/login-provider';
import { Credencial } from '../../app/models/credencial';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credencial : Credencial;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public loginProvider: LoginProvider) {
              this.credencial = new Credencial()
  }
  ionViewDidLoad(){
    this.loginProvider.loginSucess.subscribe(
      user => this.navCtrl.setRoot(HomePage)
    )
    this.loginProvider.loginFailed.subscribe(
      error => console.log(error)
    )
  }

  loginGoogle(){
    this.loginProvider.loginComGoogle()
  }

  loginCredencial(){
    this.loginProvider.loginComCredencial(this.credencial)
  }

  loginFacebook(){
    this.loginProvider.loginComFacebook()
  }

  doRegister(){
    this.navCtrl.push(RegistrarPage);
  }
}
