webpackJsonp([10],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_web_services_web_services__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fb, storage, webservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.storage = storage;
        this.webservice = webservice;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        //this.navCtrl.push('TabsPage');
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            //save facebook access token into local storage
            _this.storage.set('fbToken', res.authResponse.accessToken);
            _this.storage.set('fbID', res.authResponse.userID);
            if (res) {
                // if responce then call login api
                _this.callLoginApi(res);
            }
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
        });
    };
    LoginPage.prototype.callLoginApi = function (res) {
        var _this = this;
        this.loading.present();
        var user = { 'accessToken': res.authResponse.accessToken };
        this.webservice.loginUser(user).then(function (result) {
            console.log('callLoginApi : Responce from server : ', result);
            var resp = result;
            console.log('access token : ', resp.token);
            console.log('user id : ', resp.data._id);
            //set access token and userId into local storage
            _this.storage.set('accessToken', resp.token);
            _this.storage.set('userID', resp.data._id);
            if (result) {
                _this.loading.dismiss();
                _this.navCtrl.push('TabsPage');
            }
        }, function (err) {
            console.log(err);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/login/login.html"*/'<ion-content padding class="no-scroll bg">\n\n\n  <form class="login-form">\n    <ion-card class="card-login">\n      <ion-card-content class="content-align">\n\n        <div style="margin: 12%;">\n          <img src="assets/images/login/logo.png">\n        </div>\n\n        <img (click)="login()" style="margin-top: 5%;" src="assets/images/login/facebook.png">\n          <!--<ion-input class="item-divider" type="text" placeholder="Email"></ion-input>\n\n          <ion-input class="item-divider" style="margin-top: 5%" type="text" placeholder="Password"></ion-input>\n\n        <div class="login-btn" (click)="gotoNewsfeed()" >\n          Log in\n        </div>\n\n        <img style="margin-top: 5%;" src="assets/images/login/facebook.png">\n\n        <p text-center style="margin-top:5%;color: #8c8c8c;font-size: 10px;">If you are new you can</p>\n\n        <div class="signup-btn">Sign Up</div>-->\n      </ion-card-content>\n    </ion-card>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_web_services_web_services__["a" /* WebServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map