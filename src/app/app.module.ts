import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgForageModule } from "ngforage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TrabalhosPage } from '../pages/trabalhos/trabalhos';
import { QuestionsPage } from '../pages/questions/questions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiUfsmProvider } from '../providers/api-ufsm/api-ufsm';
import { LocalDataProvider } from '../providers/local-data/local-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TrabalhosPage,
    QuestionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgForageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TrabalhosPage,
    QuestionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiUfsmProvider,
    LocalDataProvider
  ]
})
export class AppModule {}
