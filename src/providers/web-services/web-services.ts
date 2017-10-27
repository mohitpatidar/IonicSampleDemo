import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController} from "ionic-angular";
import {Constant} from "../Constant";


@Injectable()
export class WebServicesProvider {

  apiUrl = 'http://52.26.118.138:5015/api/';

  userLogin = 'auth/facebook-login';
  userProfile = 'user/profile';
  profile_setting_master = 'user/profile-settings-master';
  user_profile_settings = 'user/profile-settings';
  update_profile = 'user/update-profile';
  update_profile_settings = 'user/update-profile-settings';

  notification_options = 'user/notification-options';
  privacy_options = 'user/privacy-options';
  user_notifications = 'user/user-notifications';
  user_privacy = 'user/user-privacy';
  update_user_notifications_setting = 'user/update-user-notifications-setting';
  update_user_privacy_setting = 'user/update-user-privacy-setting';

  list_my_places = 'places/list-my-places';
  create_or_update = 'places/create-or-update';
  place_by_id = 'places/place-by-id?placesId=';
  delete_place = 'places/delete';
  search_place = 'places/list-my-places?filterBy=';

  reviews_from_google='https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJkfTl003LHg0RxFtZGUxQE8s&output=review_summery&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs'


  userProfileData: any;
  notificationOptionsData: any;
  profileSettingMasterData: any;
  privacyOptionsData: any;
  profileSettingData: any;
  userNotifData: any;
  userPrivacyData: any;
  myPlacesData: any;
  getPlacesData: any;


  constructor(public http: Http, public loader: Constant) {
  }


  /* user login API*/
  loginUser(data) {
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.userLogin, body, options)
        .subscribe(res => {
          let resp: any = res;
          let body = resp._body;
          resolve(JSON.parse(body));
        }, (err) => {
          reject(err);
        });
    });
  }

  /* get user profile API*/
  getUserProfile(token) {

    this.userProfileData='';
    if (this.userProfileData) {
      return Promise.resolve(this.userProfileData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + this.userProfile, options)
        .map(res => res.json())
        .subscribe(userProfileData => {
          this.userProfileData = userProfileData;
          resolve(this.userProfileData);
        }, err => {
          reject();
        });
    });
  }


  /*get user profile options API*/
  getProfileSettingMaster(token) {
    this.profileSettingMasterData='';
    if (this.profileSettingMasterData) {
      return Promise.resolve(this.profileSettingMasterData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.profile_setting_master, options)
        .map(res => res.json())
        .subscribe(profileSettingMasterData => {
          this.profileSettingMasterData = profileSettingMasterData;
          resolve(this.profileSettingMasterData);
        });
    });
  }

  /* get user profile option data API*/
  getProfileSetting(token) {
    this.profileSettingData='';
    if (this.profileSettingData) {
      return Promise.resolve(this.profileSettingData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.user_profile_settings, options)
        .map(res => res.json())
        .subscribe(profileSettingData => {
          this.profileSettingData = profileSettingData;
          resolve(this.profileSettingData);

        });
    });
  }


  /* save profile API*/
  updateProfile(data, token) {
    this.loader.showLoader();
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.update_profile, body, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  /* save profile settings API*/
  updateProfileSettings(data, token) {
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.update_profile_settings, body, options)
        .subscribe(res => {
          resolve(res);
          this.loader.hideLoader();
        }, (err) => {
          reject(err);
          this.loader.hideLoader();
        });
    });
  }


  /*get SETTING options API*/
  getNotificationOptions(token) {
    this.notificationOptionsData='';
    if (this.notificationOptionsData) {
      return Promise.resolve(this.notificationOptionsData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + this.notification_options, options)
        .map(res => res.json())
        .subscribe(notificationOptionsData => {
          this.notificationOptionsData = notificationOptionsData;
          resolve(this.notificationOptionsData);
        }, err => {
          reject();
        });
    });
  }

  /*get privacy options API*/
  getPrivacyOptions(token) {
    this.privacyOptionsData='';
    if (this.privacyOptionsData) {
      return Promise.resolve(this.privacyOptionsData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.privacy_options, options)
        .map(res => res.json())
        .subscribe(privacyOptionsData => {
          this.privacyOptionsData = privacyOptionsData;
          resolve(this.privacyOptionsData);
        });
    });
  }

  /*get user notifications API*/
  getUserNotifications(token) {
    this.userNotifData='';
    if (this.userNotifData) {
      return Promise.resolve(this.userNotifData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.user_notifications, options)
        .map(res => res.json())
        .subscribe(data => {
          this.userNotifData = data;
          resolve(this.userNotifData);
        });
    });
  }

  /*get user privacy API*/
  getUserPrivacy(token) {
    this.userPrivacyData='';
    if (this.userPrivacyData) {
      return Promise.resolve(this.userPrivacyData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.user_privacy, options)
        .map(res => res.json())
        .subscribe(data => {
          this.userPrivacyData = data;
          resolve(this.userPrivacyData);
        });
    });
  }

  /* user update user notifications setting API*/
  updateUserNotificationsSetting(data, token) {
    this.loader.showLoader();
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.update_user_notifications_setting, body, options)
        .subscribe(res => {
          let resp: any = res;
          let body = resp._body;
          resolve(JSON.parse(body));
        }, (err) => {
          reject(err);
        });
    });
  }

  /* user update user privacy setting API*/
  updateUserPrivacySetting(data, token) {
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.update_user_privacy_setting, body, options)
        .subscribe(res => {
          let resp: any = res;
          let body = resp._body;
          resolve(JSON.parse(body));
          this.loader.hideLoader();
        }, (err) => {
          reject(err);
          this.loader.hideLoader();
        });
    });
  }


  /*get list_my_places API*/
  getListMyPlaces(token) {
    //this.loader.showLoader();
    this.myPlacesData='';
    if (this.myPlacesData) {
      return Promise.resolve(this.myPlacesData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + this.list_my_places, options)
        .map(res => res.json())
        .subscribe(data => {
          this.myPlacesData = data;
          resolve(this.myPlacesData);
          //this.loader.hideLoader();
        }, err => {
          reject();
        });
    });
  }


  /* user create Or Update Places API*/
  createOrUpdatePlaces(data, token) {
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.create_or_update, body, options)
        .subscribe(res => {
          let resp: any = res;
          let body = resp._body;
          resolve(JSON.parse(body));
        }, (err) => {
          reject(err);
        });
    });
  }


  /*get list_my_places API*/
  getPlaceById(token, param) {
    this.getPlacesData='';
    if (this.getPlacesData) {
      return Promise.resolve(this.getPlacesData);
    }
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.place_by_id + param, options)
        .map(res => res.json())
        .subscribe(data => {
          this.getPlacesData = data;
          resolve(this.getPlacesData);
        });
    });
  }


  /* update place API*/
  updatePlace(data, token) {
    this.loader.showLoader();
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.create_or_update, body, options)
        .subscribe(res => {
          this.loader.hideLoader();
          resolve(res);
        }, (err) => {
          this.loader.hideLoader();
          reject(err);
        });
    });
  }

  /*get Reviews from google*/
  reviewFromGoogleData:any;
  getGoogleReview(place_id){
    let reviews_from_google_url='https://maps.googleapis.com/maps/api/place/details/json?placeid='+place_id+'&output=review_summery&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs'
    return new Promise(resolve => {
      this.http.get(reviews_from_google_url, '')
        .map(res => res.json())
        .subscribe(data => {
          this.reviewFromGoogleData = data;
          resolve(this.reviewFromGoogleData);
        });
    });
  }

  deletePost(place_id: string, token: string) {
    let data = {
      placesId :place_id
    };
    let body = JSON.stringify(data);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.delete_place, body, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  searchPlace(regex: string, token: string) {
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', token);
    let options = new RequestOptions({headers: header});

    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.search_place + regex, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
