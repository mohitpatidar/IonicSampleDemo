import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any ;

  //rootPage:any = 'CreateTrailPage';
  //rootPage:any = 'AddPlacePage';
  //rootPage:any = 'MyProfilePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.storage.set('accessToken', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OWM1MGE1NzE0NjViZTdiZmViN2IwMmEiLCJpYXQiOjE1MDY2OTMyODUsImV4cCI6MTUyMjMzMTY4NX0.BuZ4qiO8InYpWTrIhAPVMK7zGN98Bhx_Nqyufg7CGM0");
      this.storage.set('userID', "59c50a571465be7bfeb7b02a");
      this.checkSession();
    });
  }

  checkSession() {

    this.storage.get('accessToken').then((token) => {
      console.log('MyApp : checkSession() : accesstoken from storage is ', token);
      if (token != null && token != '') {
        //user already logged in
        console.log('user already logged in ');
        this.rootPage= 'TabsPage';
      } else {
        //user not logged in
        console.log('user not logged in ');
        this.rootPage= 'LoginPage';
      }
    });
  }


}
