import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Facebook} from "@ionic-native/facebook";
import { WebServicesProvider } from '../providers/web-services/web-services';
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {Constant} from "../providers/Constant";
import {GoogleMaps} from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebServicesProvider,
    Storage,
    Constant,
    GoogleMaps
    ]
})
export class AppModule {}
