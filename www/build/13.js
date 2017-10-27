webpackJsonp([13],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkedTrailsPageModule", function() { return BookmarkedTrailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookmarked_trails__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookmarkedTrailsPageModule = (function () {
    function BookmarkedTrailsPageModule() {
    }
    return BookmarkedTrailsPageModule;
}());
BookmarkedTrailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bookmarked_trails__["a" /* BookmarkedTrailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookmarked_trails__["a" /* BookmarkedTrailsPage */]),
        ],
    })
], BookmarkedTrailsPageModule);

//# sourceMappingURL=bookmarked-trails.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkedTrailsPage; });
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
 * Generated class for the BookmarkedTrailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BookmarkedTrailsPage = (function () {
    function BookmarkedTrailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BookmarkedTrailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookmarkedTrailsPage');
    };
    BookmarkedTrailsPage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    return BookmarkedTrailsPage;
}());
BookmarkedTrailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bookmarked-trails',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/bookmarked-trails/bookmarked-trails.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <!--<ion-icon name="ios-search"></ion-icon>-->\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      Bookmarked Trails\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding-top padding-bottom padding-left>\n\n  <p style="font-size: 25px; margin-left: 25px;margin-bottom: 12px;color: #4a4a4a;">Bookmarked Trails</p>\n  <div style="margin-left: 18px">\n\n    <ion-row class="bookmarked-all-row">\n      <ion-card style="margin: 0;border-radius: 5px;">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n\n            <img class="bookmarked-card-image" src="assets/images/newsfeed/img3.png">\n\n            <div style="padding: 10px 20px 20px 20px;width: 100%">\n              <div style="font-size: 12px;color: #4a4a4a;margin-top: 5px;font-size: 12px;font-weight: bold">Bike trail arround the cities\n                landmarks\n              </div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">See the best attraction of\n                the city in the best way possible\n              </div>\n            </div>\n\n            <ion-row col-12 style="margin-top: 15px;">\n              <div style="background-color:#ECEFF4;width: 100%;height: 1px;margin-left: 20px;margin-right: 20px"></div>\n              <ion-col col-6 text-center>\n                <button ion-button icon-left clear small>\n                  <img style="width: 20px" src="assets/images/mytrails/right.png" align="center">\n                  <div style="text-transform: none;padding-left: 10px;color: gray;font-size: 10px">Mark Complete</div>\n                </button>\n              </ion-col>\n\n              <ion-col col-6 >\n                <button ion-button icon-left clear small>\n                  <img style="width: 20px" src="assets/images/mytrails/delete.png">\n                  <div style="text-transform: none;padding-left: 10px;color: gray;font-size: 10px">Delete</div>\n                </button>\n              </ion-col>\n\n            </ion-row>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n    <ion-row class="bookmarked-all-row">\n      <ion-card style="margin: 0;border-radius: 5px;">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n\n            <img class="bookmarked-card-image" src="assets/images/newsfeed/img2.png">\n\n            <div style="padding: 10px 20px 20px 20px;width: 100%">\n              <div style="color: #4a4a4a;font-weight:bold;font-size: 12px;margin-top: 5px;font-size: 12px">Old Town Pubs</div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">This trail is great is you\n                want to have a great night out in Old Town. It has a total of 5 pubs, all with a great history and a\n                very friendly stuff that will tell you all about it. If you asked nicely\n              </div>\n            </div>\n\n\n            <ion-row col-12 style="margin-top: 15px;">\n              <div style="background-color:#ECEFF4;width: 100%;height: 1px;margin-left: 20px;margin-right: 20px"></div>\n              <ion-col col-6 text-center>\n                <button ion-button icon-left clear small>\n                  <img style="width: 20px" src="assets/images/mytrails/right.png" align="center">\n                  <div style="text-transform: none;padding-left: 10px;color: gray;font-size: 10px">Mark Complete</div>\n                </button>\n              </ion-col>\n\n              <ion-col col-6 >\n                <button ion-button icon-left clear small>\n                  <img style="width: 20px" src="assets/images/mytrails/delete.png">\n                  <div style="text-transform: none;padding-left: 10px;color: gray;font-size: 10px">Delete</div>\n                </button>\n              </ion-col>\n\n            </ion-row>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/bookmarked-trails/bookmarked-trails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BookmarkedTrailsPage);

//# sourceMappingURL=bookmarked-trails.js.map

/***/ })

});
//# sourceMappingURL=13.js.map