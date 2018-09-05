import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {HttpModule} from '@angular/http';
import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginProvider } from '../providers/login-provider';
import firebase from "firebase";
import { UsersProvider } from '../providers/users/users';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import { TarefasListItemComponent } from '../components/tarefas-list-item/tarefas-list-item';
import {TarefasListPage} from '../pages/tarefas-list/tarefas-list';
import { TarefasAddPage } from '../pages/tarefas-add/tarefas-add';


const firebaseConfig = {
    apiKey: "AIzaSyCQIYAo3R8HISnaxbk0TpVe94V8swT7l4c",
    authDomain: "listador-de-tarefas-4c15c.firebaseapp.com",
    databaseURL: "https://listador-de-tarefas-4c15c.firebaseio.com",
    projectId: "listador-de-tarefas-4c15c",
    storageBucket: "listador-de-tarefas-4c15c.appspot.com",
    messagingSenderId: "231877198627"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    HomePage,
    TarefasListItemComponent,
    TarefasListPage,
    TarefasAddPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    TarefasListItemComponent,
    TarefasListPage,
    TarefasAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    LoginProvider,
    TarefaProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
