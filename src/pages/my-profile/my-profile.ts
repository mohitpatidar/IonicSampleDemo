import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {WebServicesProvider} from "../../providers/web-services/web-services";
import {Storage} from "@ionic/storage";
import {Constant} from "../../providers/Constant";

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  accessToken: any;



  public profileImage = '';
  public userName = '';
  public name = '';
  public email = '';
  public age = '';
  public Location = '';
  public birthday = '';
  public createdAt = '';
  public facebookId = '';
  public resetPasswordExpires;
  public _id;

  public tags = '';
  public website = '';
  public instagram = '';
  public facebook = '';
  public twitter = '';

  public label;
  optionData: any;
  settingData: any;

  jsonStr = '{"options":[]}';

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: WebServicesProvider, public storage: Storage, public loadingCtrl: LoadingController,public loader:Constant, public alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.storage.get('accessToken').then(token => {
      this.accessToken = token;

      this.callGetUserProfileAPI();
    });

  }

  callGetUserProfileAPI() {
    this.loader.showLoader();
    this.webservice.getUserProfile(this.accessToken)
      .then(responce => {
        if (responce) {

          this.profileImage = responce.data.profilePic;
          this.userName = responce.data.name;
          this.name = responce.data.name;
          this.email = responce.data.email;
          this.createdAt = responce.data.createdAt;
          this.age = responce.data.age;
          this.tags = responce.data.tags;
          this.Location = responce.data.locations;
          this.website = responce.data.website;
          this.getProfileSettingMasterAPI();
        }
      }).catch(err => {
      this.loader.hideLoader();
    });
  }


  getProfileSettingMasterAPI() {
    this.webservice.getProfileSettingMaster(this.accessToken)
      .then(responce => {
        this.optionData = responce.data;
        this.getProfileSettingAPI();
      });
  }

  getProfileSettingAPI() {
    this.webservice.getProfileSetting(this.accessToken)
      .then(responce => {
        this.loader.hideLoader();
        this.settingData = responce.data;
        for (let k = 0; k < this.settingData.length; k++) {
          for (let i = 0; i < this.optionData.length; i++) {
            for (let j = 0; j < this.optionData[i].options.length; j++) {
              if (this.settingData[k] == this.optionData[i].options[j]._id) {
                this.optionData[i].options[j].isChecked = true;
              } else {
                //this.optionData[i].options[j].isChecked = false;
              }
            }
          }
        }
      });
  }


  updateUserAPI() {

    if(this.validate()) {
    } else {
      return;
    }

    this.storage.get('fbID').then(fbID => {
      this.facebookId = fbID;
      this.storage.get('userID').then(userID => {
        this._id = userID;

        let userData = {
          "age": this.age,
          "birthday": "24/07/1992",
          "createdAt": this.createdAt,
          "email": this.email,
          "facebookId": this.facebookId,
          "name": this.userName,
          "profilePic": this.profileImage,
          "resetPasswordExpires": "1504269716366",
          "status": "1",
          "updatedAt": (new Date).getTime(),
          "updatedBy": this._id,
          "_id": this._id,
          "facebook": this.facebook,
          "instagram": this.instagram,
          "twitter": this.twitter,
          "website": this.website,
          "tags": this.tags,
          "locations": this.Location
        };

        this.webservice.updateProfile(userData, this.accessToken).then(result => {

          if (result) {
            this.updateProfileSettingsAPI();
          }
        }, (err) => {
          console.log(err);
        });
      })
    })


  }

  updateProfileSettingsAPI() {
    let interestOption = '{"options":[]}';
    for (let i = 0; i < this.optionData.length; i++) {
      for (let j = 0; j < this.optionData[i].options.length; j++) {
        if (this.optionData[i].options[j].isChecked) {
          var obj = JSON.parse(interestOption);
          obj['options'].push(this.optionData[i].options[j]._id);
          interestOption = JSON.stringify(obj);
        }
      }
    }
    this.webservice.updateProfileSettings(JSON.parse(interestOption), this.accessToken).then(result => {
      if (result) {
        //this.updateProfileSettingsAPI();
      }
    }, (err) => {
      console.log(err);
    });
  }


  optionSelection(selectionId) {
    var obj = JSON.parse(this.jsonStr);
    obj['options'].push(selectionId);
    this.jsonStr = JSON.stringify(obj);
  }

  gotoFriends() {
    this.navCtrl.push('FriendsPage');
  }

  gotoTrails() {
    this.navCtrl.push('MyTrailsPage');
    //this.navCtrl.setRoot('TabsPage',{tab: 2,page: 'mytrail'});
  }

  gotoSettings() {
    this.navCtrl.push('SettingPage');
  }

  gotoSearch() {
    this.navCtrl.push('SearchPage');
  }

  validate(): boolean {

    if(!this.userName || this.userName.trim() == "") {
      this.showPopUp('Alert', 'Please enter username.');
      return false;
    }

    if(!this.age || parseInt(this.age) < 18) {
      this.showPopUp('Alert', 'Age should be more than or equal to 18.');
      return false;
    }

    if(!this.email || this.email.trim() == "") {
      return false;
    }

    if(!this.Location || this.Location.trim() == "") {
      this.showPopUp('Alert', 'Please enter location.');
      return false;
    }

    if(!this.tags || this.tags.trim() == "") {
      this.showPopUp('Alert', 'Please enter tags.');
      return false;
    }



    if(this.website.trim().length > 0) {
      this.website = this.website.trim();
      if(this.website.trim().charAt(0) === 'H') {
        this.website = this.website.trim().replace('H','h');
      }
      if(this.website.trim().charAt(1) === 'T') {
        this.website = this.website.trim().replace('T','t');
      }
      if(this.website.trim().charAt(2) === 'T') {
        this.website = this.website.trim().replace('T','t');
      }
      if(this.website.trim().charAt(3) === 'P') {
        this.website = this.website.trim().replace('P','p');
      }
      if(this.website.trim().charAt(4) === 'S') {
        this.website = this.website.trim().replace('S','s');
      }
      let urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
      var re = new RegExp(urlRegex);
      let input = this.website;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid website link.');
        return false;
      }
    }

    if(this.instagram.trim().length > 0) {
      this.instagram = this.instagram.trim();
      if(this.instagram.trim().charAt(0) === 'H') {
        this.instagram = this.instagram.trim().replace('H','h');
      }
      if(this.instagram.trim().charAt(1) === 'T') {
        this.instagram = this.instagram.trim().replace('T','t');
      }
      if(this.instagram.trim().charAt(2) === 'T') {
        this.instagram = this.instagram.trim().replace('T','t');
      }
      if(this.instagram.trim().charAt(3) === 'P') {
        this.instagram = this.instagram.trim().replace('P','p');
      }
      if(this.instagram.trim().charAt(4) === 'S') {
        this.instagram = this.instagram.trim().replace('S','s');
      }
      let urlRegex = /(https?:\/\/)?([\w\.]*)instagram\.com\/([a-zA-Z0-9_-]*)$/;
      let re = new RegExp(urlRegex);
      let input = this.instagram;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid instagram link.');
        return false;
      }
    }

    if(this.facebook.trim().length > 0) {
      this.facebook = this.facebook.trim();
      if(this.facebook.trim().charAt(0) === 'H') {
        this.facebook = this.facebook.trim().replace('H','h');
      }
      if(this.facebook.trim().charAt(1) === 'T') {
        this.facebook = this.facebook.trim().replace('T','t');
      }
      if(this.facebook.trim().charAt(2) === 'T') {
        this.facebook = this.facebook.trim().replace('T','t');
      }
      if(this.facebook.trim().charAt(3) === 'P') {
        this.facebook = this.facebook.trim().replace('P','p');
      }
      if(this.facebook.trim().charAt(4) === 'S') {
        this.facebook = this.facebook.trim().replace('S','s');
      }
      let urlRegex = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
      let re = new RegExp(urlRegex);
      let input = this.facebook;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid facebook link.');
        return false;
      }
    }

    if(this.twitter.trim().length > 0) {
      this.twitter = this.twitter.trim();
      if(this.twitter.trim().charAt(0) === 'H') {
        this.twitter = this.twitter.trim().replace('H','h');
      }
      if(this.twitter.trim().charAt(1) === 'T') {
        this.twitter = this.twitter.trim().replace('T','t');
      }
      if(this.twitter.trim().charAt(2) === 'T') {
        this.twitter = this.twitter.trim().replace('T','t');
      }
      if(this.twitter.trim().charAt(3) === 'P') {
        this.twitter = this.twitter.trim().replace('P','p');
      }
      if(this.twitter.trim().charAt(4) === 'S') {
        this.twitter = this.twitter.trim().replace('S','s');
      }
      let urlRegex = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
      let re = new RegExp(urlRegex);
      let input = this.twitter;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid twitter link.');
        return false;
      }
    }
    return true;
  }

  showPopUp(title : string,msg : string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

}
