webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailDetailPageModule", function() { return TrailDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trail_detail__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrailDetailPageModule = (function () {
    function TrailDetailPageModule() {
    }
    return TrailDetailPageModule;
}());
TrailDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__trail_detail__["a" /* TrailDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trail_detail__["a" /* TrailDetailPage */]),
        ],
    })
], TrailDetailPageModule);

//# sourceMappingURL=trail-detail.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailDetailPage; });
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
 * Generated class for the TrailDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrailDetailPage = (function () {
    function TrailDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrailDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrailDetailPage');
    };
    TrailDetailPage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    return TrailDetailPage;
}());
TrailDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trail-detail',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/trail-detail/trail-detail.html"*/'<!--\n  Generated template for the TrailDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="setup-Navbar" hideBackButton="true">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      Trail\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding-top padding-bottom padding-left>\n\n  <p style="font-size: 22px; margin-left: 12px;margin-bottom: 22px;margin-top: 12px;">Trail search</p>\n  <ion-card style="margin: 0">\n    <ion-card-content>\n\n      <div class="trail-detail-div">\n        <p class="trail-detail-div-title">Title of the Trail</p>\n        <ion-input class="trail-detail-item-divider" type="text"></ion-input>\n      </div>\n\n      <div class="trail-detail-div">\n        <p class="trail-detail-div-title">Destination</p>\n        <ion-input class="trail-detail-item-divider" type="text"></ion-input>\n      </div>\n\n      <div class="trail-detail-div">\n        <p class="trail-detail-div-title">Source</p>\n        <ion-input class="trail-detail-item-divider" type="text"></ion-input>\n      </div>\n\n      <div class="trail-detail-div">\n        <p class="trail-detail-div-title">No of days for the Trail</p>\n        <ion-input class="trail-detail-item-divider" type="text"></ion-input>\n      </div>\n\n      <div class="trail-detail-div">\n        <p class="trail-detail-div-title">Journey start date</p>\n        <ion-input class="trail-detail-item-divider" type="text"></ion-input>\n      </div>\n\n      <div class="trail-detail-div-title trail-detail-div">Description of trail</div>\n      <textarea class="trail-detail-textarea"></textarea>\n\n      <!--<div style="color: cornflowerblue;font-size: 12px;">+ Show criteria</div>-->\n\n      <ion-row style="margin-top: 15px">\n        <ion-col col-4><img style="width: 10px;float: right" src="assets/images/createtrail/left_arrow.png"></ion-col>\n        <ion-col col-4 text-center style="font-size: 14px">Day 1</ion-col>\n        <ion-col col-4><img style="width: 10px" src="assets/images/createtrail/right_arrow.png"></ion-col>\n      </ion-row>\n\n      <ion-slides style="margin-top: 25px">\n        <ion-slide style="padding-right: 2px;">\n\n          <ion-item style="padding-left: 0px">\n            <ion-input class="trail-detail-item-divider" type="text"\n                       placeholder="9 am: Search the Landmark"></ion-input>\n            <div item-right class="trail-detail-item-divider" style="padding-left: 0px">\n              <img style="padding: 12px" src="assets/images/traildetail/cycle.png">\n            </div>\n          </ion-item>\n\n\n          <ion-item style="padding-left: 0px">\n            <ion-input class="trail-detail-item-divider" type="text"\n                       placeholder="11 am: Search the Landmark"></ion-input>\n            <div item-right class="trail-detail-item-divider" style="padding-left: 0px">\n              <img style="padding: 12px" src="assets/images/traildetail/car.png">\n            </div>\n          </ion-item>\n\n          <ion-item style="padding-left: 0px">\n            <ion-input class="trail-detail-item-divider" type="text"\n                       placeholder="1 pm: Search the Landmark"></ion-input>\n            <div item-right class="trail-detail-item-divider" style="padding-left: 0px">\n              <img style="padding: 12px" src="assets/images/traildetail/car.png">\n            </div>\n          </ion-item>\n\n          <ion-item style="padding-left: 0px">\n            <ion-input class="trail-detail-item-divider" type="text"\n                       placeholder="3 pm: Search the Landmark"></ion-input>\n            <div item-right class="trail-detail-item-divider" style="padding-left: 0px">\n              <img style="padding: 12px" src="assets/images/traildetail/cycle.png">\n            </div>\n          </ion-item>\n\n\n          <ion-item style="padding-left: 0px">\n            <ion-input class="trail-detail-item-divider" type="text"\n                       placeholder="5 pm: Search the Landmark"></ion-input>\n            <div item-right class="trail-detail-item-divider" style="padding-left: 0px">\n              <img style="padding: 12px" src="assets/images/traildetail/scooter.png">\n            </div>\n          </ion-item>\n\n\n          <ion-item style="padding-left: 0px">\n            <ion-input class="trail-detail-item-divider" type="text"\n                       placeholder="7 pm: Search the Landmark"></ion-input>\n            <div item-right class="trail-detail-item-divider" style="padding-left: 0px">\n              <img style="padding: 12px" src="assets/images/traildetail/car.png">\n            </div>\n          </ion-item>\n\n\n          <img class="trail-detail-image" src="assets/images/newsfeed/img2.png">\n\n          <ion-input class="trail-detail-item-divider" style="margin-top: 15px" type="text"\n                     placeholder="Link1:"></ion-input>\n          <ion-input class="trail-detail-item-divider" style="margin-top: 15px" type="text"\n                     placeholder="Link2:"></ion-input>\n          <ion-input class="trail-detail-item-divider" style="margin-top: 15px" type="text"\n                     placeholder="Link3:"></ion-input>\n          <ion-input class="trail-detail-item-divider" style="margin-top: 15px" type="text"\n                     placeholder="Link4:"></ion-input>\n\n\n          <div style="height: 1px;width: 100%;background-color:#ECEFF4"></div>\n          <ion-list>\n            <ion-item style="padding-left: 0px; margin-top: 15px">\n              <ion-row>\n                <ion-col col-4 class="trail-detail-column">\n                  Make it:\n                </ion-col>\n                <ion-col col-8>\n                  <ion-row>\n                    <input type="radio" name="Budget">\n                    <div class="radio-txt">Private</div>\n                  </ion-row>\n                  <ion-row style="margin-top: 10px">\n                    <input type="radio" name="Budget">\n                    <div class="radio-txt">Public not searchable</div>\n                  </ion-row>\n                  <ion-row style="margin-top: 10px">\n                    <input type="radio" name="Budget">\n                    <div class="radio-txt">Public and searchable</div>\n                  </ion-row>\n                  <ion-row style="margin-top: 10px">\n                    <input type="radio" name="Budget">\n                    <div class="radio-txt">Friends</div>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <div style="height: 1.5px;width: 100%;background-color:#ECEFF4"></div>\n\n            <ion-item style="padding-left: 0px;">\n              <ion-row>\n                <ion-col col-4 class="trail-detail-column">\n                  This is a:\n                </ion-col>\n                <ion-col col-8>\n                  <ion-row>\n                    <input type="radio" name="this_is_a">\n                    <div class="radio-txt">Temperory trail</div>\n                  </ion-row>\n                  <ion-row style="margin-top: 10px">\n                    <input type="radio" name="this_is_a">\n                    <div class="radio-txt">Permanent trail</div>\n                  </ion-row>\n                  <ion-row style="margin-top: 10px">\n                    <div style="font-size: 10px;">Will be visible for <input style="width: 25%;"\n                                                                             class="trail-detail-item-divider"\n                                                                             type="text" name="Budget"> days\n                    </div>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <div style="height: 2px;width: 100%;background-color:#ECEFF4"></div>\n\n            <ion-item style="padding-left: 0px;">\n              <ion-row>\n                <ion-col col-4 class="trail-detail-column">\n                  Comments:\n                </ion-col>\n                <ion-col col-8>\n                  <ion-row>\n                    <input type="radio" name="Comments">\n                    <div class="radio-txt">Request comments</div>\n                  </ion-row>\n                  <ion-row style="margin-top: 10px">\n                    <input type="radio" name="Comments">\n                    <div class="radio-txt">Turn off comments</div>\n                  </ion-row>\n\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <div style="height: 1.5px;width: 100%;background-color:#ECEFF4"></div>\n\n            <ion-item style="padding-left: 0px;">\n              <ion-row>\n                <ion-col col-4 class="trail-detail-column">\n                  Copy it:\n                </ion-col>\n                <ion-col col-8>\n                  <ion-row>\n                    <input type="radio" name="Comments">\n                    <div class="radio-txt">Allow user to copy</div>\n                  </ion-row>\n                  <ion-row style="margin-top: 10px">\n                    <input type="radio" name="Comments">\n                    <div class="radio-txt">Don\'t allow user to copy</div>\n                  </ion-row>\n\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <div style="height: 1.5px;width: 100%;background-color:#ECEFF4"></div>\n\n          </ion-list>\n\n\n          <ion-row style="margin-top: 15px;">\n            <ion-col col-2 style="padding: 0;">\n              <div style="font-size: 12px;margin-top: 10px">Import</div>\n            </ion-col>\n            <ion-col col-10 style="padding: 0;">\n              <ion-item class="trail-detail-import-item">\n                <img src="assets/images/traildetail/facebook.png" item-left>\n                <div style="margin-left: 5px" text-wrap>Import from Facebook</div>\n              </ion-item>\n              <ion-item style="margin-top: 5px" class="trail-detail-import-item">\n                <img src="assets/images/traildetail/insta.png" item-left>\n                <div style="margin-left: 5px" text-wrap>Import from Instagram</div>\n              </ion-item>\n            </ion-col>\n            <!--<ion-col col-5 style="padding: 0;">\n              <ion-item class="trail-detail-import-item">\n                <img src="assets/images/traildetail/insta.png" item-left>\n                <div style="margin-left: 5px" text-wrap>Import from Instagram</div>\n              </ion-item>\n            </ion-col>-->\n          </ion-row>\n\n\n          <ion-slides style="background-color:#ecf0f1;margin-top: 7%">\n            <ion-slide class="trail-slide">\n              <img class="trail-detail-image" src="assets/images/newsfeed/img1.png">\n            </ion-slide>\n\n            <ion-slide class="trail-slide">\n              <img class="trail-detail-image" src="assets/images/newsfeed/img1.png">\n            </ion-slide>\n\n            <ion-slide class="trail-slide">\n              <img class="trail-detail-image" src="assets/images/newsfeed/img1.png">\n            </ion-slide>\n          </ion-slides>\n\n\n          <ion-item style="font-size: 14px">\n            <div item-left>Set Criteria:</div>\n            <button style="margin-left: 10px" ion-button>SET CRITERIA</button>\n          </ion-item>\n\n          <div style="margin-top:15px;height: 1.5px;width: 100%;background-color:#ECEFF4"></div>\n\n          <ion-row style="margin-top: 25px">\n\n            <ion-col col-3 style="padding: 0px">\n              <button style="background-color: #2e84e8;" class="trail-detail-btn" ion-button>Save</button>\n            </ion-col>\n\n            <ion-col col-3 style="padding: 0px">\n              <button style="background-color: #2ecc71;" class="trail-detail-btn" ion-button>Submit</button>\n            </ion-col>\n\n            <ion-col col-6 style="padding: 0px;">\n\n              <button style="background-color: #507cc0;float: left;margin-left: 5px;" class="trail-detail-fbbutton"\n                      ion-button icon-left>\n                <img style="width: 10%;margin-right: 5px;margin-left: 15px;height: 50%"\n                     src="assets/images/createtrail/facebook_icon.png" align="center">\n                <div>Share to Facebook</div>\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-slide>\n      </ion-slides>\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/trail-detail/trail-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TrailDetailPage);

//# sourceMappingURL=trail-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map