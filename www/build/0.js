webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadedTrailsPageModule", function() { return UploadedTrailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploaded_trails__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadedTrailsPageModule = (function () {
    function UploadedTrailsPageModule() {
    }
    return UploadedTrailsPageModule;
}());
UploadedTrailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__uploaded_trails__["a" /* UploadedTrailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uploaded_trails__["a" /* UploadedTrailsPage */]),
        ],
    })
], UploadedTrailsPageModule);

//# sourceMappingURL=uploaded-trails.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadedTrailsPage; });
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
 * Generated class for the UploadedTrailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UploadedTrailsPage = (function () {
    function UploadedTrailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploadedTrailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadedTrailsPage');
    };
    UploadedTrailsPage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    return UploadedTrailsPage;
}());
UploadedTrailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-uploaded-trails',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/uploaded-trails/uploaded-trails.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      Uploaded Trails\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding>\n\n  <p style="font-size: 20px;margin: 10px 0 10px 25px;color: gray">Uploaded Trails</p>\n\n\n  <div style="margin-left: 18px">\n\n    <ion-row class="uploaded-trails-all-row">\n      <ion-card style="margin: 0;border-radius: 5px;">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n\n            <img class="uploaded-trails-card-image" src="assets/images/newsfeed/img3.png">\n\n            <div style="padding: 5px 20px 0px 20px;width: 100%">\n              <div style="font-size: 12px;color: #4a4a4a;font-weight:bold;margin-top: 5px;font-size: 12px">Bike trail arround the cities\n                landmarks\n              </div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">See the best attraction of\n                the city in the best way possible\n              </div>\n            </div>\n\n            <ion-row col-12 style="padding-left: 5px">\n\n              <ion-col col-4>\n                <button class="edit-btn" ion-button >\n                  Edit\n                </button>\n              </ion-col>\n\n              <ion-col col-4 >\n                <button class="delete-btn"  ion-button >Delete</button>\n              </ion-col>\n\n            </ion-row>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n    <ion-row class="uploaded-trails-all-row">\n      <ion-card style="margin: 0;border-radius: 5px;">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n\n            <img class="uploaded-trails-card-image" src="assets/images/newsfeed/img2.png">\n\n            <div style="padding: 5px 20px 0px 20px;width: 100%">\n              <div style="color: #4a4a4a;font-weight:bold;font-size: 12px;margin-top: 5px;font-size: 12px">Trip timestapn20160918\n              </div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">This is a mobile app recorded trail\n              </div>\n            </div>\n\n            <ion-row col-12 style="padding-left: 5px">\n\n              <ion-col col-4>\n                <button class="edit-btn" ion-button >\n                  Edit\n                </button>\n              </ion-col>\n\n              <ion-col col-4 >\n                <button class="delete-btn" ion-button >Delete</button>\n              </ion-col>\n\n            </ion-row>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/uploaded-trails/uploaded-trails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], UploadedTrailsPage);

//# sourceMappingURL=uploaded-trails.js.map

/***/ })

});
//# sourceMappingURL=0.js.map