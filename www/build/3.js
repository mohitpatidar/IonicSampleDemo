webpackJsonp([3],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = (function () {
    function SettingPageModule() {
    }
    return SettingPageModule;
}());
SettingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
        ],
    })
], SettingPageModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_services_web_services__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, webservice, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webservice = webservice;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('accessToken').then(function (token) {
            _this.accessToken = token;
            _this.loading.present();
            _this.getProfileSettingMasterAPI();
        });
    };
    SettingPage.prototype.getProfileSettingMasterAPI = function () {
        var _this = this;
        this.webservice.getNotificationOptions(this.accessToken)
            .then(function (responce) {
            if (responce) {
                _this.notifOptionList = responce.data[0].options;
                _this.getPrivacyOptionsAPI();
            }
        }).catch(function (err) {
        });
    };
    SettingPage.prototype.getPrivacyOptionsAPI = function () {
        var _this = this;
        this.webservice.getPrivacyOptions(this.accessToken)
            .then(function (responce) {
            if (responce) {
                _this.privacyOptionList = responce.data[0].options;
                _this.getUserNotificationsAPI();
            }
        });
    };
    SettingPage.prototype.getUserNotificationsAPI = function () {
        var _this = this;
        this.webservice.getUserNotifications(this.accessToken)
            .then(function (responce) {
            if (responce) {
                _this.notifOptionData = responce.data;
                for (var i = 0; i < _this.notifOptionData.length; i++) {
                    for (var j = 0; j < _this.notifOptionList.length; j++) {
                        if (_this.notifOptionList[j]._id == _this.notifOptionData[i]) {
                            _this.notifOptionList[j].isChecked = true;
                            break;
                        }
                    }
                }
                _this.getUserPrivacyAPI();
            }
        });
    };
    SettingPage.prototype.getUserPrivacyAPI = function () {
        var _this = this;
        this.webservice.getUserPrivacy(this.accessToken)
            .then(function (responce) {
            _this.privacyOptionData = responce.data;
            for (var i = 0; i < _this.privacyOptionData.length; i++) {
                for (var j = 0; j < _this.privacyOptionList.length; j++) {
                    if (_this.privacyOptionList[j]._id == _this.privacyOptionData[i]) {
                        _this.privacyOptionList[j].isChecked = true;
                        break;
                    }
                }
            }
            _this.loading.dismiss();
        });
    };
    SettingPage.prototype.save = function () {
        var privacySettingOption = '{"options":[]}';
        var notifSettingOption = '{"options":[]}';
        for (var i = 0; i < this.notifOptionList.length; i++) {
            if (this.notifOptionList[i].isChecked) {
                var obj = JSON.parse(notifSettingOption);
                obj['options'].push(this.notifOptionList[i]._id);
                notifSettingOption = JSON.stringify(obj);
            }
        }
        for (var i = 0; i < this.privacyOptionList.length; i++) {
            if (this.privacyOptionList[i].isChecked) {
                var objPrivacy = JSON.parse(privacySettingOption);
                objPrivacy['options'].push(this.privacyOptionList[i]._id);
                privacySettingOption = JSON.stringify(objPrivacy);
            }
        }
        this.callUpdateUserNotificationsSettingAPI(notifSettingOption, privacySettingOption);
    };
    SettingPage.prototype.callUpdateUserNotificationsSettingAPI = function (notifSettingOption, privacySettingOption) {
        var _this = this;
        if (notifSettingOption != '') {
            this.webservice.updateUserNotificationsSetting(JSON.parse(notifSettingOption), this.accessToken).then(function (result) {
                if (result) {
                    _this.callUpdateUserPrivacySettingAPI(privacySettingOption);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
        }
    };
    SettingPage.prototype.callUpdateUserPrivacySettingAPI = function (privacySettingOption) {
        this.webservice.updateUserPrivacySetting(JSON.parse(privacySettingOption), this.accessToken).then(function (result) {
        }, function (err) {
            console.log(err);
        });
    };
    SettingPage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/setting/setting.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar" hideBackButton="true">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      Settings\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding-top padding-bottom padding-left>\n  <p style="font-size: 20px;margin: 10px 0 10px 20px;color: gray">Settings</p>\n\n  <ion-row class="setting-main-row">\n    <ion-card style="margin: 0;border-radius: 5px;">\n      <ion-card-content >\n\n        <div style="margin: 10px;color: gray">Notifications</div>\n        <div class="setting-line-div"></div>\n        <ion-item style="padding-left: 5px">\n          <ion-row *ngFor="let item of notifOptionList">\n            <ion-col col-1>\n              <input type="checkbox" [checked]="item.isChecked" (change)="item.isChecked = !item.isChecked">\n            </ion-col>\n            <ion-col col-11 class="setting-option-row"><div text-wrap>{{item.option}}</div></ion-col>\n          </ion-row>\n\n        </ion-item>\n\n        <div style="margin: 10px;color: gray;">Privacy</div>\n        <div class="setting-line-div"></div>\n        <ion-item style="padding-left: 5px">\n          <ion-row  *ngFor="let item of privacyOptionList">\n            <ion-col col-1>\n              <input type="checkbox" [checked]="item.isChecked" (change)="item.isChecked = !item.isChecked">\n            </ion-col>\n            <ion-col col-11 class="setting-option-row"><div>{{item.option}}</div></ion-col>\n          </ion-row>\n        </ion-item>\n\n        <button ion-button class="save-btn" (click)="save()" >Save</button>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_web_services_web_services__["a" /* WebServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=3.js.map