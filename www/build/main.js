webpackJsonp([15],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Constant = (function () {
    function Constant(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.myPlacesUpdate = {
            title: '',
            location: ''
        };
    }
    Constant.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    Constant.prototype.hideLoader = function () {
        this.loading.dismiss();
    };
    Constant.prototype.setMyPlacesUpdate = function (title, location) {
        this.myPlacesUpdate.title = title;
        this.myPlacesUpdate.location = location;
    };
    Constant.prototype.getMyPlacesUpdates = function () {
        return this.myPlacesUpdate;
    };
    return Constant;
}());
Constant = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
], Constant);

//# sourceMappingURL=Constant.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-place/add-place.module": [
		270,
		14
	],
	"../pages/bookmarked-trails/bookmarked-trails.module": [
		271,
		13
	],
	"../pages/create-trail/create-trail.module": [
		272,
		12
	],
	"../pages/friends/friends.module": [
		273,
		11
	],
	"../pages/login/login.module": [
		274,
		10
	],
	"../pages/my-places/my-places.module": [
		275,
		9
	],
	"../pages/my-profile/my-profile.module": [
		276,
		8
	],
	"../pages/my-trails/my-trails.module": [
		277,
		7
	],
	"../pages/newsfeed/newsfeed.module": [
		278,
		6
	],
	"../pages/record-trail/record-trail.module": [
		279,
		5
	],
	"../pages/search/search.module": [
		280,
		4
	],
	"../pages/setting/setting.module": [
		281,
		3
	],
	"../pages/tabs/tabs.module": [
		282,
		2
	],
	"../pages/trail-detail/trail-detail.module": [
		283,
		1
	],
	"../pages/uploaded-trails/uploaded-trails.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Constant__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebServicesProvider = (function () {
    function WebServicesProvider(http, loader) {
        this.http = http;
        this.loader = loader;
        this.apiUrl = 'http://52.26.118.138:5015/api/';
        this.userLogin = 'auth/facebook-login';
        this.userProfile = 'user/profile';
        this.profile_setting_master = 'user/profile-settings-master';
        this.user_profile_settings = 'user/profile-settings';
        this.update_profile = 'user/update-profile';
        this.update_profile_settings = 'user/update-profile-settings';
        this.notification_options = 'user/notification-options';
        this.privacy_options = 'user/privacy-options';
        this.user_notifications = 'user/user-notifications';
        this.user_privacy = 'user/user-privacy';
        this.update_user_notifications_setting = 'user/update-user-notifications-setting';
        this.update_user_privacy_setting = 'user/update-user-privacy-setting';
        this.list_my_places = 'places/list-my-places';
        this.create_or_update = 'places/create-or-update';
        this.place_by_id = 'places/place-by-id?placesId=';
        this.delete_place = 'places/delete';
        this.search_place = 'places/list-my-places?filterBy=';
        this.reviews_from_google = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJkfTl003LHg0RxFtZGUxQE8s&output=review_summery&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs';
    }
    /* user login API*/
    WebServicesProvider.prototype.loginUser = function (data) {
        var _this = this;
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.userLogin, body, options)
                .subscribe(function (res) {
                var resp = res;
                var body = resp._body;
                resolve(JSON.parse(body));
            }, function (err) {
                reject(err);
            });
        });
    };
    /* get user profile API*/
    WebServicesProvider.prototype.getUserProfile = function (token) {
        var _this = this;
        this.userProfileData = '';
        if (this.userProfileData) {
            return Promise.resolve(this.userProfileData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + _this.userProfile, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (userProfileData) {
                _this.userProfileData = userProfileData;
                resolve(_this.userProfileData);
            }, function (err) {
                reject();
            });
        });
    };
    /*get user profile options API*/
    WebServicesProvider.prototype.getProfileSettingMaster = function (token) {
        var _this = this;
        this.profileSettingMasterData = '';
        if (this.profileSettingMasterData) {
            return Promise.resolve(this.profileSettingMasterData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.profile_setting_master, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (profileSettingMasterData) {
                _this.profileSettingMasterData = profileSettingMasterData;
                resolve(_this.profileSettingMasterData);
            });
        });
    };
    /* get user profile option data API*/
    WebServicesProvider.prototype.getProfileSetting = function (token) {
        var _this = this;
        this.profileSettingData = '';
        if (this.profileSettingData) {
            return Promise.resolve(this.profileSettingData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.user_profile_settings, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (profileSettingData) {
                _this.profileSettingData = profileSettingData;
                resolve(_this.profileSettingData);
            });
        });
    };
    /* save profile API*/
    WebServicesProvider.prototype.updateProfile = function (data, token) {
        var _this = this;
        this.loader.showLoader();
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.update_profile, body, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /* save profile settings API*/
    WebServicesProvider.prototype.updateProfileSettings = function (data, token) {
        var _this = this;
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.update_profile_settings, body, options)
                .subscribe(function (res) {
                resolve(res);
                _this.loader.hideLoader();
            }, function (err) {
                reject(err);
                _this.loader.hideLoader();
            });
        });
    };
    /*get SETTING options API*/
    WebServicesProvider.prototype.getNotificationOptions = function (token) {
        var _this = this;
        this.notificationOptionsData = '';
        if (this.notificationOptionsData) {
            return Promise.resolve(this.notificationOptionsData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + _this.notification_options, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (notificationOptionsData) {
                _this.notificationOptionsData = notificationOptionsData;
                resolve(_this.notificationOptionsData);
            }, function (err) {
                reject();
            });
        });
    };
    /*get privacy options API*/
    WebServicesProvider.prototype.getPrivacyOptions = function (token) {
        var _this = this;
        this.privacyOptionsData = '';
        if (this.privacyOptionsData) {
            return Promise.resolve(this.privacyOptionsData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.privacy_options, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (privacyOptionsData) {
                _this.privacyOptionsData = privacyOptionsData;
                resolve(_this.privacyOptionsData);
            });
        });
    };
    /*get user notifications API*/
    WebServicesProvider.prototype.getUserNotifications = function (token) {
        var _this = this;
        this.userNotifData = '';
        if (this.userNotifData) {
            return Promise.resolve(this.userNotifData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.user_notifications, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.userNotifData = data;
                resolve(_this.userNotifData);
            });
        });
    };
    /*get user privacy API*/
    WebServicesProvider.prototype.getUserPrivacy = function (token) {
        var _this = this;
        this.userPrivacyData = '';
        if (this.userPrivacyData) {
            return Promise.resolve(this.userPrivacyData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.user_privacy, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.userPrivacyData = data;
                resolve(_this.userPrivacyData);
            });
        });
    };
    /* user update user notifications setting API*/
    WebServicesProvider.prototype.updateUserNotificationsSetting = function (data, token) {
        var _this = this;
        this.loader.showLoader();
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.update_user_notifications_setting, body, options)
                .subscribe(function (res) {
                var resp = res;
                var body = resp._body;
                resolve(JSON.parse(body));
            }, function (err) {
                reject(err);
            });
        });
    };
    /* user update user privacy setting API*/
    WebServicesProvider.prototype.updateUserPrivacySetting = function (data, token) {
        var _this = this;
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.update_user_privacy_setting, body, options)
                .subscribe(function (res) {
                var resp = res;
                var body = resp._body;
                resolve(JSON.parse(body));
                _this.loader.hideLoader();
            }, function (err) {
                reject(err);
                _this.loader.hideLoader();
            });
        });
    };
    /*get list_my_places API*/
    WebServicesProvider.prototype.getListMyPlaces = function (token) {
        var _this = this;
        //this.loader.showLoader();
        this.myPlacesData = '';
        if (this.myPlacesData) {
            return Promise.resolve(this.myPlacesData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + _this.list_my_places, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.myPlacesData = data;
                resolve(_this.myPlacesData);
                //this.loader.hideLoader();
            }, function (err) {
                reject();
            });
        });
    };
    /* user create Or Update Places API*/
    WebServicesProvider.prototype.createOrUpdatePlaces = function (data, token) {
        var _this = this;
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.create_or_update, body, options)
                .subscribe(function (res) {
                var resp = res;
                var body = resp._body;
                resolve(JSON.parse(body));
            }, function (err) {
                reject(err);
            });
        });
    };
    /*get list_my_places API*/
    WebServicesProvider.prototype.getPlaceById = function (token, param) {
        var _this = this;
        this.getPlacesData = '';
        if (this.getPlacesData) {
            return Promise.resolve(this.getPlacesData);
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.place_by_id + param, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.getPlacesData = data;
                resolve(_this.getPlacesData);
            });
        });
    };
    /* update place API*/
    WebServicesProvider.prototype.updatePlace = function (data, token) {
        var _this = this;
        this.loader.showLoader();
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.create_or_update, body, options)
                .subscribe(function (res) {
                _this.loader.hideLoader();
                resolve(res);
            }, function (err) {
                _this.loader.hideLoader();
                reject(err);
            });
        });
    };
    WebServicesProvider.prototype.getGoogleReview = function (place_id) {
        var _this = this;
        var reviews_from_google_url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + place_id + '&output=review_summery&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs';
        return new Promise(function (resolve) {
            _this.http.get(reviews_from_google_url, '')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviewFromGoogleData = data;
                resolve(_this.reviewFromGoogleData);
            });
        });
    };
    WebServicesProvider.prototype.deletePost = function (place_id, token) {
        var _this = this;
        var data = {
            placesId: place_id
        };
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + _this.delete_place, body, options)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    WebServicesProvider.prototype.searchPlace = function (regex, token) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.search_place + regex, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return WebServicesProvider;
}());
WebServicesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__Constant__["a" /* Constant */]])
], WebServicesProvider);

//# sourceMappingURL=web-services.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_web_services_web_services__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_Constant__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-place/add-place.module#AddPlacePageModule', name: 'AddPlacePage', segment: 'add-place', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bookmarked-trails/bookmarked-trails.module#BookmarkedTrailsPageModule', name: 'BookmarkedTrailsPage', segment: 'bookmarked-trails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-trail/create-trail.module#CreateTrailPageModule', name: 'CreateTrailPage', segment: 'create-trail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-places/my-places.module#MyPlacesPageModule', name: 'MyPlacesPage', segment: 'my-places', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-trails/my-trails.module#MyTrailsPageModule', name: 'MyTrailsPage', segment: 'my-trails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newsfeed/newsfeed.module#NewsfeedPageModule', name: 'NewsfeedPage', segment: 'newsfeed', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/record-trail/record-trail.module#RecordTrailPageModule', name: 'RecordTrailPage', segment: 'record-trail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/trail-detail/trail-detail.module#TrailDetailPageModule', name: 'TrailDetailPage', segment: 'trail-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/uploaded-trails/uploaded-trails.module#UploadedTrailsPageModule', name: 'UploadedTrailsPage', segment: 'uploaded-trails', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_web_services_web_services__["a" /* WebServicesProvider */],
            Storage,
            __WEBPACK_IMPORTED_MODULE_10__providers_Constant__["a" /* Constant */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* GoogleMaps */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    //rootPage:any = 'CreateTrailPage';
    //rootPage:any = 'AddPlacePage';
    //rootPage:any = 'MyProfilePage';
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.set('accessToken', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OWM1MGE1NzE0NjViZTdiZmViN2IwMmEiLCJpYXQiOjE1MDY2OTMyODUsImV4cCI6MTUyMjMzMTY4NX0.BuZ4qiO8InYpWTrIhAPVMK7zGN98Bhx_Nqyufg7CGM0");
            _this.storage.set('userID', "59c50a571465be7bfeb7b02a");
            _this.checkSession();
        });
    }
    MyApp.prototype.checkSession = function () {
        var _this = this;
        this.storage.get('accessToken').then(function (token) {
            console.log('MyApp : checkSession() : accesstoken from storage is ', token);
            if (token != null && token != '') {
                //user already logged in
                console.log('user already logged in ');
                _this.rootPage = 'TabsPage';
            }
            else {
                //user not logged in
                console.log('user not logged in ');
                _this.rootPage = 'LoginPage';
            }
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map