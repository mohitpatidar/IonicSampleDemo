import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {WebServicesProvider} from "../../providers/web-services/web-services";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  accessToken: any;
  loading: any;
  notifOptionList:any;
  notifOptionData:any;
  privacyOptionList:any;
  privacyOptionData:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public webservice:WebServicesProvider,public storage:Storage,public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }

  ionViewDidLoad() {
    this.storage.get('accessToken').then(token => {
      this.accessToken = token;

      this.loading.present();
      this.getProfileSettingMasterAPI();
    });
  }

  getProfileSettingMasterAPI() {
    this.webservice.getNotificationOptions(this.accessToken)
      .then(responce => {
        if (responce){
          this.notifOptionList=responce.data[0].options;
          this.getPrivacyOptionsAPI();
        }
      }).catch(err => {

    });
  }

  getPrivacyOptionsAPI() {
    this.webservice.getPrivacyOptions(this.accessToken)
      .then(responce => {
        if(responce){
          this.privacyOptionList = responce.data[0].options;
          this.getUserNotificationsAPI();
        }
      });
  }

  getUserNotificationsAPI() {
    this.webservice.getUserNotifications(this.accessToken)
      .then(responce => {
        if (responce){
          this.notifOptionData=responce.data;
          for (let i=0;i<this.notifOptionData.length;i++){
            for (let j=0;j<this.notifOptionList.length;j++){
              if (this.notifOptionList[j]._id == this.notifOptionData[i]){
                this.notifOptionList[j].isChecked=true;
                break;
              }
            }
          }
          this.getUserPrivacyAPI();
        }
      });
  }

  getUserPrivacyAPI() {
    this.webservice.getUserPrivacy(this.accessToken)
      .then(responce => {
        this.privacyOptionData=responce.data;
        for (let i = 0;i < this.privacyOptionData.length;i++){
          for (let j = 0;j < this.privacyOptionList.length;j++){
            if (this.privacyOptionList[j]._id == this.privacyOptionData[i]){
              this.privacyOptionList[j].isChecked = true;
              break;
            }
          }
        }
        this.loading.dismiss();
      });
  }

  save(){
    let privacySettingOption='{"options":[]}';
    let notifSettingOption='{"options":[]}';

    for(let i=0;i < this.notifOptionList.length;i++){
      if(this.notifOptionList[i].isChecked) {
        var obj = JSON.parse(notifSettingOption);
        obj['options'].push(this.notifOptionList[i]._id);
        notifSettingOption = JSON.stringify(obj);
      }
    }

    for(let i=0;i < this.privacyOptionList.length;i++){
      if(this.privacyOptionList[i].isChecked) {
        var objPrivacy = JSON.parse(privacySettingOption);
        objPrivacy['options'].push(this.privacyOptionList[i]._id);
        privacySettingOption = JSON.stringify(objPrivacy);
      }
    }

    this.callUpdateUserNotificationsSettingAPI(notifSettingOption,privacySettingOption);
  }

  callUpdateUserNotificationsSettingAPI(notifSettingOption,privacySettingOption){
    if (notifSettingOption!=''){

      this.webservice.updateUserNotificationsSetting(JSON.parse(notifSettingOption), this.accessToken).then(result => {

        if (result) {
          this.callUpdateUserPrivacySettingAPI(privacySettingOption);
        }
      }, (err) => {
        console.log(err);
      });
    } else {
    }
  }

  callUpdateUserPrivacySettingAPI(privacySettingOption){
      this.webservice.updateUserPrivacySetting(JSON.parse(privacySettingOption), this.accessToken).then(result => {
      }, (err) => {
        console.log(err);
      });
  }

  gotoSearch(){
    this.navCtrl.push('SearchPage');
  }

}
