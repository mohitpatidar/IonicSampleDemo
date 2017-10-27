webpackJsonp([8],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyProfilePageModule = (function () {
    function MyProfilePageModule() {
    }
    return MyProfilePageModule;
}());
MyProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]),
        ],
    })
], MyProfilePageModule);

//# sourceMappingURL=my-profile.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_services_web_services__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_Constant__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyProfilePage = (function () {
    function MyProfilePage(navCtrl, navParams, webservice, storage, loadingCtrl, loader, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webservice = webservice;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.profileImage = '';
        this.userName = '';
        this.name = '';
        this.email = '';
        this.age = '';
        this.Location = '';
        this.birthday = '';
        this.createdAt = '';
        this.facebookId = '';
        this.tags = '';
        this.website = '';
        this.instagram = '';
        this.facebook = '';
        this.twitter = '';
        this.jsonStr = '{"options":[]}';
    }
    MyProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('accessToken').then(function (token) {
            _this.accessToken = token;
            _this.callGetUserProfileAPI();
        });
    };
    MyProfilePage.prototype.callGetUserProfileAPI = function () {
        var _this = this;
        this.loader.showLoader();
        this.webservice.getUserProfile(this.accessToken)
            .then(function (responce) {
            if (responce) {
                _this.profileImage = responce.data.profilePic;
                _this.userName = responce.data.name;
                _this.name = responce.data.name;
                _this.email = responce.data.email;
                _this.createdAt = responce.data.createdAt;
                _this.age = responce.data.age;
                _this.tags = responce.data.tags;
                _this.Location = responce.data.locations;
                _this.website = responce.data.website;
                _this.getProfileSettingMasterAPI();
            }
        }).catch(function (err) {
            _this.loader.hideLoader();
        });
    };
    MyProfilePage.prototype.getProfileSettingMasterAPI = function () {
        var _this = this;
        this.webservice.getProfileSettingMaster(this.accessToken)
            .then(function (responce) {
            _this.optionData = responce.data;
            _this.getProfileSettingAPI();
        });
    };
    MyProfilePage.prototype.getProfileSettingAPI = function () {
        var _this = this;
        this.webservice.getProfileSetting(this.accessToken)
            .then(function (responce) {
            _this.loader.hideLoader();
            _this.settingData = responce.data;
            for (var k = 0; k < _this.settingData.length; k++) {
                for (var i = 0; i < _this.optionData.length; i++) {
                    for (var j = 0; j < _this.optionData[i].options.length; j++) {
                        if (_this.settingData[k] == _this.optionData[i].options[j]._id) {
                            _this.optionData[i].options[j].isChecked = true;
                        }
                        else {
                            //this.optionData[i].options[j].isChecked = false;
                        }
                    }
                }
            }
        });
    };
    MyProfilePage.prototype.updateUserAPI = function () {
        var _this = this;
        if (this.validate()) {
        }
        else {
            return;
        }
        this.storage.get('fbID').then(function (fbID) {
            _this.facebookId = fbID;
            _this.storage.get('userID').then(function (userID) {
                _this._id = userID;
                var userData = {
                    "age": _this.age,
                    "birthday": "24/07/1992",
                    "createdAt": _this.createdAt,
                    "email": _this.email,
                    "facebookId": _this.facebookId,
                    "name": _this.userName,
                    "profilePic": _this.profileImage,
                    "resetPasswordExpires": "1504269716366",
                    "status": "1",
                    "updatedAt": (new Date).getTime(),
                    "updatedBy": _this._id,
                    "_id": _this._id,
                    "facebook": _this.facebook,
                    "instagram": _this.instagram,
                    "twitter": _this.twitter,
                    "website": _this.website,
                    "tags": _this.tags,
                    "locations": _this.Location
                };
                _this.webservice.updateProfile(userData, _this.accessToken).then(function (result) {
                    if (result) {
                        _this.updateProfileSettingsAPI();
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    MyProfilePage.prototype.updateProfileSettingsAPI = function () {
        var interestOption = '{"options":[]}';
        for (var i = 0; i < this.optionData.length; i++) {
            for (var j = 0; j < this.optionData[i].options.length; j++) {
                if (this.optionData[i].options[j].isChecked) {
                    var obj = JSON.parse(interestOption);
                    obj['options'].push(this.optionData[i].options[j]._id);
                    interestOption = JSON.stringify(obj);
                }
            }
        }
        this.webservice.updateProfileSettings(JSON.parse(interestOption), this.accessToken).then(function (result) {
            if (result) {
                //this.updateProfileSettingsAPI();
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyProfilePage.prototype.optionSelection = function (selectionId) {
        var obj = JSON.parse(this.jsonStr);
        obj['options'].push(selectionId);
        this.jsonStr = JSON.stringify(obj);
    };
    MyProfilePage.prototype.gotoFriends = function () {
        this.navCtrl.push('FriendsPage');
    };
    MyProfilePage.prototype.gotoTrails = function () {
        this.navCtrl.push('MyTrailsPage');
        //this.navCtrl.setRoot('TabsPage',{tab: 2,page: 'mytrail'});
    };
    MyProfilePage.prototype.gotoSettings = function () {
        this.navCtrl.push('SettingPage');
    };
    MyProfilePage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    MyProfilePage.prototype.validate = function () {
        if (!this.userName || this.userName.trim() == "") {
            this.showPopUp('Alert', 'Please enter username.');
            return false;
        }
        if (!this.age || parseInt(this.age) < 18) {
            this.showPopUp('Alert', 'Age should be more than or equal to 18.');
            return false;
        }
        if (!this.email || this.email.trim() == "") {
            return false;
        }
        if (!this.Location || this.Location.trim() == "") {
            this.showPopUp('Alert', 'Please enter location.');
            return false;
        }
        if (!this.tags || this.tags.trim() == "") {
            this.showPopUp('Alert', 'Please enter tags.');
            return false;
        }
        if (this.website.trim().length > 0) {
            this.website = this.website.trim();
            if (this.website.trim().charAt(0) === 'H') {
                this.website = this.website.trim().replace('H', 'h');
            }
            if (this.website.trim().charAt(1) === 'T') {
                this.website = this.website.trim().replace('T', 't');
            }
            if (this.website.trim().charAt(2) === 'T') {
                this.website = this.website.trim().replace('T', 't');
            }
            if (this.website.trim().charAt(3) === 'P') {
                this.website = this.website.trim().replace('P', 'p');
            }
            if (this.website.trim().charAt(4) === 'S') {
                this.website = this.website.trim().replace('S', 's');
            }
            var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
            var re = new RegExp(urlRegex);
            var input = this.website;
            var isValid = re.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid website link.');
                return false;
            }
        }
        if (this.instagram.trim().length > 0) {
            this.instagram = this.instagram.trim();
            if (this.instagram.trim().charAt(0) === 'H') {
                this.instagram = this.instagram.trim().replace('H', 'h');
            }
            if (this.instagram.trim().charAt(1) === 'T') {
                this.instagram = this.instagram.trim().replace('T', 't');
            }
            if (this.instagram.trim().charAt(2) === 'T') {
                this.instagram = this.instagram.trim().replace('T', 't');
            }
            if (this.instagram.trim().charAt(3) === 'P') {
                this.instagram = this.instagram.trim().replace('P', 'p');
            }
            if (this.instagram.trim().charAt(4) === 'S') {
                this.instagram = this.instagram.trim().replace('S', 's');
            }
            var urlRegex = /(https?:\/\/)?([\w\.]*)instagram\.com\/([a-zA-Z0-9_-]*)$/;
            var re_1 = new RegExp(urlRegex);
            var input = this.instagram;
            var isValid = re_1.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid instagram link.');
                return false;
            }
        }
        if (this.facebook.trim().length > 0) {
            this.facebook = this.facebook.trim();
            if (this.facebook.trim().charAt(0) === 'H') {
                this.facebook = this.facebook.trim().replace('H', 'h');
            }
            if (this.facebook.trim().charAt(1) === 'T') {
                this.facebook = this.facebook.trim().replace('T', 't');
            }
            if (this.facebook.trim().charAt(2) === 'T') {
                this.facebook = this.facebook.trim().replace('T', 't');
            }
            if (this.facebook.trim().charAt(3) === 'P') {
                this.facebook = this.facebook.trim().replace('P', 'p');
            }
            if (this.facebook.trim().charAt(4) === 'S') {
                this.facebook = this.facebook.trim().replace('S', 's');
            }
            var urlRegex = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
            var re_2 = new RegExp(urlRegex);
            var input = this.facebook;
            var isValid = re_2.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid facebook link.');
                return false;
            }
        }
        if (this.twitter.trim().length > 0) {
            this.twitter = this.twitter.trim();
            if (this.twitter.trim().charAt(0) === 'H') {
                this.twitter = this.twitter.trim().replace('H', 'h');
            }
            if (this.twitter.trim().charAt(1) === 'T') {
                this.twitter = this.twitter.trim().replace('T', 't');
            }
            if (this.twitter.trim().charAt(2) === 'T') {
                this.twitter = this.twitter.trim().replace('T', 't');
            }
            if (this.twitter.trim().charAt(3) === 'P') {
                this.twitter = this.twitter.trim().replace('P', 'p');
            }
            if (this.twitter.trim().charAt(4) === 'S') {
                this.twitter = this.twitter.trim().replace('S', 's');
            }
            var urlRegex = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
            var re_3 = new RegExp(urlRegex);
            var input = this.twitter;
            var isValid = re_3.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid twitter link.');
                return false;
            }
        }
        return true;
    };
    MyProfilePage.prototype.showPopUp = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/my-profile/my-profile.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      My Profile\n    </ion-title>\n    <ion-buttons class="row" right style="padding: 5px">\n      <button  ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n      <button (click)="gotoSettings()" ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/settings/setting_icon.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding-top padding-bottom padding-left>\n\n  <ion-row>\n    <button style="height: 100%;padding:10px 0px 10px 20px" ion-button icon-left clear >\n      <!--<img style="width: 70px" src="assets/images/friends/user1.png" align="center">-->\n      <img style="width: 75px;border-radius: 50%;" align="center" src="{{profileImage}}">\n      <ion-row>\n      <ion-row style="margin-top: 15px;width: 100%">\n\n      <div style="padding-left: 8px;color: #4a4a4a;font-size: 22px;text-transform: none;">{{name}}</div>\n      <!--<div style="padding-left: 8px;color: #4a4a4a;font-size: 22px;text-transform: none;">Tad Hall</div>-->\n      </ion-row>\n      <ion-row style="margin-top: 5px">\n        <ion-col col-6>\n          <button class="trails-btn" (click)="gotoTrails()" ion-button >View Trails</button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button class="friends-btn" (click)="gotoFriends()" ion-button >View Friends</button>\n        </ion-col>\n\n      </ion-row>\n      </ion-row>\n    </button>\n  </ion-row>\n\n\n  <!--<form>-->\n  <ion-row class="my-profile-row">\n    <ion-card style="margin: 0;border-radius: 5px;">\n      <ion-card-content style="padding: 25px">\n\n        <div style="margin: 10px 10px 10px 0px;color: gray">Basic Info</div>\n        <div class="my-profile-line-div"></div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Name</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="text" name="username" [(ngModel)]="userName" required></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Age</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="number" name="age" [(ngModel)]="age"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Email</p>\n          <ion-input class="my-profile-item-divider" type="text" name="email" [(ngModel)]="email" disabled></ion-input>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Location</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="text" name="Location" [(ngModel)]="Location"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Tags</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="text" name="tags" [(ngModel)]="tags"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Website link</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="text" name="website" [(ngModel)]="website"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Instagram</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="text" name="instagram" [(ngModel)]="instagram"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Facebook</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="text" name="facebook" [(ngModel)]="facebook"></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Twitter</p>\n          <ion-item>\n          <ion-input class="my-profile-item-divider" type="text" name="twitter" [(ngModel)]="twitter"></ion-input>\n          </ion-item>\n        </div>\n\n\n        <div class="my-profile-div">\n          <p class="my-profile-div-title">Interests</p>\n\n          <ion-list *ngFor="let data of optionData">\n            <ion-item style="padding-left: 0px;">\n              <ion-row>\n                <ion-col col-4 class="my-profile-list-column">\n                  {{data.label}}\n                </ion-col>\n                <ion-col col-8 style="margin-top: -5px;padding: 0;">\n                  <ion-row style="margin-top: 10px" *ngFor="let options of data.options">\n                    <!--<input type="radio" name="{{data.label}}" value="{{options.option}}" (click)="optionSelection(options._id)" >-->\n\n                    <!--<input type="checkbox" id="{{data.label}}"/>-->\n                    <input type="checkbox" id="{{data.label}}" [checked]="options.isChecked" (change)="options.isChecked = !options.isChecked">\n                    <div class="radio-txt">{{options.option}}</div>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <div style="height: 2px;width: 100%;background-color:#ECEFF4"></div>\n          </ion-list>\n\n          <button ion-button class="save-btn" (click)="updateUserAPI()">Save</button>\n        </div>\n\n\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n  <!--</form>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/my-profile/my-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_web_services_web_services__["a" /* WebServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_Constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map