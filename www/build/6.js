webpackJsonp([6],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPageModule", function() { return NewsfeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newsfeed__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsfeedPageModule = (function () {
    function NewsfeedPageModule() {
    }
    return NewsfeedPageModule;
}());
NewsfeedPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__newsfeed__["a" /* NewsfeedPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newsfeed__["a" /* NewsfeedPage */]),
        ],
    })
], NewsfeedPageModule);

//# sourceMappingURL=newsfeed.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedPage; });
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
 * Generated class for the NewsfeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewsfeedPage = (function () {
    function NewsfeedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsfeedPage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    return NewsfeedPage;
}());
NewsfeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newsfeed',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/newsfeed/newsfeed.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <!--<ion-icon name="ios-search"></ion-icon>-->\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      Newsfeed\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding-top padding-bottom>\n\n  <ion-row class="feed-all-row">\n    <ion-col col-2>\n      <img src="assets/images/newsfeed/place.png">\n    </ion-col>\n    <ion-col col-10>\n      <ion-card style="margin: 0">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n            <ion-row class="feed-main-row">\n              <ion-col col-2>\n                <img src="assets/images/newsfeed/user_icon.png">\n              </ion-col>\n              <ion-col style="padding-top: 10px" col-10>\n                <div class="feed-title">Mike White added a new place:</div>\n                <div class="feed-time">1 hour ago</div>\n              </ion-col>\n            </ion-row>\n            <img class="feed-image" src="assets/images/newsfeed/img1.png">\n\n            <div style="padding: 20px;width: 100%">\n              <div style="font-size: 12px;color: gray;margin-top: 5px;font-size: 12px">Pops Bakery</div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">Rockfeller Center, 12:40 6th Ave, New York, NY\n                10020, USA\n              </div>\n            </div>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="feed-all-row">\n    <ion-col col-2>\n      <img src="assets/images/newsfeed/people.png">\n    </ion-col>\n    <ion-col col-10>\n      <ion-card style="margin: 0">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n            <ion-row class="feed-main-row">\n              <ion-col col-2>\n                <img src="assets/images/newsfeed/user_icon.png">\n              </ion-col>\n              <ion-col style="padding-top: 10px" col-10>\n                <div class="feed-title">Mike White became friends with Rebeca West</div>\n                <div class="feed-time">2 hour ago</div>\n              </ion-col>\n            </ion-row>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="feed-all-row">\n    <ion-col col-2>\n      <img src="assets/images/newsfeed/map.png">\n    </ion-col>\n    <ion-col col-10>\n      <ion-card style="margin: 0">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n            <ion-row class="feed-main-row">\n              <ion-col col-2>\n                <img src="assets/images/newsfeed/user_icon_2.png">\n              </ion-col>\n              <ion-col style="padding-top: 10px" col-10>\n                <div class="feed-title">Jane Smith added a new trail:</div>\n                <div class="feed-time">4 hour ago</div>\n              </ion-col>\n            </ion-row>\n            <img class="feed-image" src="assets/images/newsfeed/img2.png">\n\n            <div style="padding: 20px;width: 100%">\n              <div style="font-size: 12px;color: gray;margin-top: 5px;font-size: 12px">Old Town Pubs</div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">\n                This trail is great is you want to have a great night out in Old Town. It has a total of 5 pubs, all with a great history and a very friendly stuff that will tell you all about it. If you asked nicely\n              </div>\n            </div>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="feed-all-row">\n    <ion-col col-2>\n      <img src="assets/images/newsfeed/people_like.png">\n    </ion-col>\n    <ion-col col-10>\n      <ion-card style="margin: 0">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n            <ion-row class="feed-main-row">\n              <ion-col col-2>\n                <img src="assets/images/newsfeed/user_icon_1.png">\n              </ion-col>\n              <ion-col style="padding-top: 10px" col-10>\n                <div class="feed-title">Rebeca West bookmarked a trail:</div>\n                <div class="feed-time">4 hour ago</div>\n              </ion-col>\n            </ion-row>\n            <img class="feed-image" src="assets/images/newsfeed/img3.png">\n\n            <div style="padding: 20px;width: 100%">\n              <div style="font-size: 12px;color: gray;margin-top: 5px;font-size: 12px">Bike trail arround the cities landmarks</div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">\n                See the best attraction of the city in the best way possible\n              </div>\n            </div>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/newsfeed/newsfeed.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NewsfeedPage);

//# sourceMappingURL=newsfeed.js.map

/***/ })

});
//# sourceMappingURL=6.js.map