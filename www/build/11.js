webpackJsonp([11],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function() { return FriendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendsPageModule = (function () {
    function FriendsPageModule() {
    }
    return FriendsPageModule;
}());
FriendsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friends__["a" /* FriendsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friends__["a" /* FriendsPage */]),
        ],
    })
], FriendsPageModule);

//# sourceMappingURL=friends.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the FriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FriendsPage = (function () {
    function FriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    FriendsPage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/friends/friends.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar" hideBackButton="true">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      Friends\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding-top padding-bottom padding-left>\n\n  <ion-row style="padding-right: 30px" col-12>\n    <ion-col col-4>\n      <p style="font-size: 20px;margin: 5px 0 10px 20px;color: gray">Friends</p>\n    </ion-col>\n\n    <ion-col col-4>\n      <button style="width: 100%;background-color: #007aff; height: 30px;font-size: 12px;text-transform: none;" ion-button >Find Friends</button>\n    </ion-col>\n\n    <ion-col col-4>\n      <button style="width: 100%;background-color: #2ec95c; height: 30px;font-size: 12px;text-transform: none;" ion-button >Invite Friends</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="friends-main-row">\n    <ion-card style="margin: 0;border-radius: 5px;">\n      <ion-card-content style="padding: 0">\n\n        <ion-col col-6>\n          <button style="height: 100%;padding: 20px 0px 20px 10px;" ion-button icon-left clear >\n            <img style="width: 30%" src="assets/images/friends/user1.png" align="center">\n            <div style="padding-left: 15px;color: gray;text-transform: none;">Rebeca West</div>\n          </button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button style="height: 100%;padding: 20px 0px 20px 10px;" ion-button icon-left clear >\n            <img style="width: 30%" src="assets/images/friends/user2.png" align="center">\n            <div style="text-transform: none;padding-left: 15px;color: gray">Mike White</div>\n          </button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button style="height: 100%;padding: 20px 0px 20px 10px;" ion-button icon-left clear >\n            <img style="width: 30%" src="assets/images/friends/user3.png" align="center">\n            <div style="text-transform: none;padding-left: 15px;color: gray">Jane Smith</div>\n          </button>\n        </ion-col>\n\n\n\n\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/friends/friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ })

});
//# sourceMappingURL=11.js.map