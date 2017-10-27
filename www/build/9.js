webpackJsonp([9],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPlacesPageModule", function() { return MyPlacesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_places__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyPlacesPageModule = (function () {
    function MyPlacesPageModule() {
    }
    return MyPlacesPageModule;
}());
MyPlacesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_places__["a" /* MyPlacesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_places__["a" /* MyPlacesPage */]),
        ],
    })
], MyPlacesPageModule);

//# sourceMappingURL=my-places.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPlacesPage; });
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





/**
 * Generated class for the MyPlacesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyPlacesPage = (function () {
    function MyPlacesPage(navCtrl, navParams, alertCtrl, webservice, storage, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.webservice = webservice;
        this.storage = storage;
        this.loader = loader;
        this.myPlacesDataList = [];
        this.searchPlacesDataList = [];
        this.searchingResultTxt = '';
    }
    MyPlacesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('accessToken').then(function (token) {
            _this.accessToken = token;
            _this.getListMyPlacesAPI();
        });
    };
    MyPlacesPage.prototype.getListMyPlacesAPI = function () {
        var _this = this;
        this.loader.showLoader();
        this.webservice.getListMyPlaces(this.accessToken)
            .then(function (responce) {
            _this.myPlacesDataList = responce.data;
            _this.loader.hideLoader();
        }).catch(function (err) {
            _this.loader.hideLoader();
        });
    };
    MyPlacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPlacesPage');
    };
    MyPlacesPage.prototype.ionViewDidEnter = function () {
        /*if(this.tapIndex) {*/
        try {
            if (this.myPlacesDataList[this.tapIndex].title && this.myPlacesDataList[this.tapIndex].title != '') {
                this.myPlacesDataList[this.tapIndex].title = this.loader.getMyPlacesUpdates().title;
            }
            if (this.myPlacesDataList[this.tapIndex].destination && this.myPlacesDataList[this.tapIndex].destination != '') {
                this.myPlacesDataList[this.tapIndex].destination = this.loader.getMyPlacesUpdates().location;
            }
            this.loader.setMyPlacesUpdate('', '');
        }
        catch (e) {
        }
        /*}*/
    };
    MyPlacesPage.prototype.editMyPlace = function (id, indx, title, location) {
        this.tapIndex = indx;
        this.loader.setMyPlacesUpdate(title, location);
        this.navCtrl.push('AddPlacePage', { id: id, edit: true });
    };
    MyPlacesPage.prototype.gotoAddPlace = function () {
        this.navCtrl.push('AddPlacePage', { edit: false });
    };
    MyPlacesPage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    MyPlacesPage.prototype.deletePlace = function (placeId, indx) {
        var _this = this;
        this.webservice.deletePost(placeId, this.accessToken)
            .then(function (response) {
            _this.myPlacesDataList.splice(indx, 1);
        }).catch(function (err) {
        });
    };
    MyPlacesPage.prototype.presentDeleteConfirm = function (placeId, indx) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Do you want to delete this place?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.deletePlace(placeId, indx);
                    }
                }
            ]
        });
        alert.present();
    };
    MyPlacesPage.prototype.presentSearchPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Search',
            inputs: [
                {
                    name: 'txt',
                    placeholder: 'search'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                },
                {
                    text: 'Search',
                    handler: function (data) {
                        if (data.txt.trim().length > 0) {
                            _this.searchPlace(data.txt);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    MyPlacesPage.prototype.searchPlace = function (txt) {
        var _this = this;
        this.searchPlacesDataList = [];
        this.searchingResultTxt = txt;
        console.log(this.searchingResultTxt);
        this.webservice.searchPlace(txt, this.accessToken).then(function (response) {
            console.log(JSON.stringify(response));
            var resp = response;
            _this.searchPlacesDataList = resp.data;
        }).catch(function (err) {
        });
    };
    MyPlacesPage.prototype.clearResult = function () {
        this.searchingResultTxt = '';
    };
    MyPlacesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.webservice.getListMyPlaces(this.accessToken)
            .then(function (responce) {
            _this.myPlacesDataList = responce.data;
            refresher.complete();
        }).catch(function (err) {
            refresher.complete();
        });
    };
    return MyPlacesPage;
}());
MyPlacesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-places',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/my-places/my-places.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      My Places\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ECEFF4" padding-top padding-bottom padding-left>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row col-12>\n    <ion-col col-5>\n      <p style="font-size: 18px;margin: 13px 0 10px 25px;color: #4a4a4a">My Places</p>\n    </ion-col>\n\n    <ion-col col-4>\n      <div class="my-places-blue-div" (click)="gotoAddPlace()">Add</div>\n    </ion-col>\n\n    <ion-col col-3>\n      <img style="width: 20px;margin-right: 15px;margin-top: 13px;float: right;" src="assets/images/newsfeed/search.png" (click)="presentSearchPrompt()">\n    </ion-col>\n  </ion-row>\n\n  <div class="row" *ngIf="searchingResultTxt !== \'\'" style="margin-left: 18px">\n    <p col-10 no-padding no-margin>Search for <font style="font-weight: 900">{{searchingResultTxt}}</font></p>\n    <p col-2 no-padding no-margin style="color: #ca3a11" (click)="clearResult()"> X </p>\n  </div>\n\n  <div *ngIf="searchingResultTxt == \'\' && myPlacesDataList.length == 0">\n    <p style="text-align: center">No places found</p>\n  </div>\n\n  <div *ngIf="searchingResultTxt !== \'\' && searchPlacesDataList.length == 0">\n    <p style="text-align: center">No places found</p>\n  </div>\n\n  <div style="margin-left: 18px">\n    <div *ngFor="let place of myPlacesDataList; let i = index" [attr.data-index]="i">\n    <ion-row class="my-places-all-row" *ngIf="searchingResultTxt == \'\'">\n      <ion-card style="margin: 0;border-radius: 5px;">\n        <ion-card-content style="padding: 0">\n          <ion-row>\n\n            <!--<img class="my-places-card-image" src="assets/images/newsfeed/img1.png">-->\n\n            <img class="my-places-card-image" src="http://maps.googleapis.com/maps/api/streetview?size=400x200&location={{place.lat}},{{place.lng}}&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs" />\n            <!--<img class="my-places-card-image" src="http://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=600x300&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs" />-->\n\n            <div style="padding: 5px 20px 0px 20px;width: 100%">\n              <div style="font-size: 12px;color: #4a4a4a;margin-top: 5px;font-size: 14px;font-weight: bold">{{place.title}}\n              </div>\n              <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">{{place.destination}}\n              </div>\n            </div>\n\n            <ion-row col-12 style="padding-left: 5px">\n\n              <ion-col col-4>\n                <button style="text-transform: none;width: 100%;height: 28px;font-size: 12px;background-color: #2e84e8;" ion-button >\n              Add to trail\n                </button>\n              </ion-col>\n\n              <ion-col col-4 >\n                <button style="text-transform: none;width: 100%;background-color: #2ec95c; height: 28px;font-size: 12px" ion-button (click)="editMyPlace(place._id, i, place.title, place.destination)" >Edit</button>\n              </ion-col>\n\n              <ion-col col-4>\n                <button class="delete-btn" ion-button (click)="presentDeleteConfirm(place._id, i, place.destination)">\n                  Delete\n                </button>\n              </ion-col>\n\n            </ion-row>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n    </div>\n\n    <div *ngFor="let places of searchPlacesDataList; let idx = index" [attr.data-index]="idx" >\n      <ion-row class="my-places-all-row" *ngIf="searchingResultTxt !== \'\'">\n        <ion-card style="margin: 0;border-radius: 5px;">\n          <ion-card-content style="padding: 0">\n            <ion-row>\n              <!--<img class="my-places-card-image" src="assets/images/newsfeed/img1.png">-->\n\n              <img class="my-places-card-image" src="http://maps.googleapis.com/maps/api/streetview?size=400x200&location={{places.lat}},{{places.lng}}&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs" />\n              <!--<img class="my-places-card-image" src="http://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=600x300&key=AIzaSyCANwWGF7aEZiZbtT0vV3v27gRx_ufIoHs" />-->\n\n              <div style="padding: 5px 20px 0px 20px;width: 100%">\n                <div style="font-size: 12px;color: #4a4a4a;margin-top: 5px;font-size: 14px;font-weight: bold">{{places.title}}\n                </div>\n                <div style="font-size: 9px;color: darkgray;font-size: 10px;margin-top: 5px;">{{places.destination}}\n                </div>\n              </div>\n\n              <ion-row col-12 style="padding-left: 5px">\n\n                <ion-col col-4>\n                  <button style="text-transform: none;width: 100%;height: 28px;font-size: 12px;background-color: #2e84e8;" ion-button >\n                    Add to trail\n                  </button>\n                </ion-col>\n\n                <ion-col col-4 >\n                  <button style="text-transform: none;width: 100%;background-color: #2ec95c; height: 28px;font-size: 12px" ion-button (click)="editMyPlace(places._id, idx, places.title, places.destination)" >Edit</button>\n                </ion-col>\n\n                <ion-col col-4>\n                  <button class="delete-btn" ion-button (click)="deletePlace(places._id, idx)">\n                    Delete\n                  </button>\n                </ion-col>\n\n              </ion-row>\n\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/my-places/my-places.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_web_services_web_services__["a" /* WebServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_Constant__["a" /* Constant */]])
], MyPlacesPage);

//# sourceMappingURL=my-places.js.map

/***/ })

});
//# sourceMappingURL=9.js.map