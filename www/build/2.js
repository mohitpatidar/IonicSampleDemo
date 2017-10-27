webpackJsonp([2],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
        ]
    })
], TabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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


var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.tabSelectedIndex = 1;
        this.tab1Root = 'NewsfeedPage';
        this.tab2Root = 'RecordTrailPage';
        this.tab3Root = '';
        this.tab4Root = 'MyProfilePage';
        if (this.navParams.data) {
            if (this.navParams.data.page == 'mytrail') {
                this.tab3Root = 'MyTrailsPage';
            }
            else if (this.navParams.data.page == 'bookmark') {
                this.tab3Root = 'BookmarkedTrailsPage';
            }
            else if (this.navParams.data.page == 'uploaded') {
                this.tab3Root = 'UploadedTrailsPage';
            }
            else if (this.navParams.data.page == 'myplace') {
                this.tab3Root = 'MyPlacesPage';
            }
            else if (this.navParams.data.page == 'createtrail') {
                this.tab3Root = 'CreateTrailPage';
            }
            this.tabSelectedIndex = this.navParams.data.tab;
        }
    }
    TabsPage.prototype.openSheetTrails = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'My Trails',
                    handler: function () {
                        _this.navCtrl.setRoot('TabsPage', { tab: 2, page: 'mytrail' });
                    }
                }, {
                    text: 'Bookmarked Trails',
                    handler: function () {
                        _this.navCtrl.setRoot('TabsPage', { tab: 2, page: 'bookmark' });
                    }
                }, {
                    text: 'Uploaded Trails',
                    handler: function () {
                        _this.navCtrl.setRoot('TabsPage', { tab: 2, page: 'uploaded' });
                    }
                }, {
                    text: 'My Places',
                    handler: function () {
                        _this.navCtrl.setRoot('TabsPage', { tab: 2, page: 'myplace' });
                    }
                }, {
                    text: 'Create Trail',
                    handler: function () {
                        _this.navCtrl.setRoot('TabsPage', { tab: 2, page: 'createtrail' });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs selectedIndex="{{tabSelectedIndex}}">\n\n  <ion-tab [root]="tab1Root" tabIcon="one"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="two"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="three"></ion-tab>\n  <div class="tabs-div" (click)="openSheetTrails()"></div>\n  <ion-tab [root]="tab4Root" tabIcon="four"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=2.js.map