import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Ion, AlertCmp, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login-provider';
import { Credencial } from '../../app/models/credencial';
import {LoginPage} from '../login/login'

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  credencial : Credencial;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:LoginProvider, private alertCtrl: AlertController) {
    this.credencial = new Credencial();
  }

  registrarSe(){
    this.loginProvider.registrarUser(this.credencial);

    let alert = this.alertCtrl.create({
      title: 'Usuário Cadastrado!',
      subTitle: 'Parabens, você acabou de se cadastrar!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(LoginPage)
  }
}
