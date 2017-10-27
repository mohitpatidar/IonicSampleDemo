import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {Storage} from "@ionic/storage";
import {WebServicesProvider} from "../../providers/web-services/web-services";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook,
              public storage: Storage, public webservice: WebServicesProvider,public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }


  login() {
    //this.navCtrl.push('TabsPage');
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);

        //save facebook access token into local storage
        this.storage.set('fbToken', res.authResponse.accessToken);
        this.storage.set('fbID', res.authResponse.userID);
        if (res) {
          // if responce then call login api
          this.callLoginApi(res);
        }
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
      });
  }


  callLoginApi(res) {
    this.loading.present();
    let user = {'accessToken': res.authResponse.accessToken}

    this.webservice.loginUser(user).then(result => {
      console.log('callLoginApi : Responce from server : ',result);

      let resp: any = result;
      console.log('access token : ',resp.token);
      console.log('user id : ',resp.data._id);
      //set access token and userId into local storage
      this.storage.set('accessToken', resp.token);
      this.storage.set('userID', resp.data._id);

      if (result) {
        this.loading.dismiss();
        this.navCtrl.push('TabsPage');
      }
    }, (err) => {
      console.log(err);
    });
  }

}
