webpackJsonp([14],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlacePageModule", function() { return AddPlacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_place__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPlacePageModule = (function () {
    function AddPlacePageModule() {
    }
    return AddPlacePageModule;
}());
AddPlacePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_place__["a" /* AddPlacePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_place__["a" /* AddPlacePage */]),
        ],
    })
], AddPlacePageModule);

//# sourceMappingURL=add-place.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
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





var AddPlacePage = (function () {
    function AddPlacePage(navCtrl, navParams, webservice, storage, zone, loader, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webservice = webservice;
        this.storage = storage;
        this.zone = zone;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.editPlace = false;
        this.service = new google.maps.places.AutocompleteService();
        this.address = {
            place: '',
            set: false,
        };
        this.markers = [];
        /*populated data fields binds from view*/
        this.description = '';
        this.title = '';
        this.details = '';
        this.link1 = '';
        this.link2 = '';
        this.link3 = '';
        this.link4 = '';
        this.google_place_id = '';
        this.lat = 0;
        this.lng = 0;
        this.editPlace = this.navParams.data.edit;
        this.placeId = this.navParams.data.id;
        console.log('this.editPlace ---- ', this.editPlace);
        console.log('this.placeId ---- ', this.placeId);
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AddPlacePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        this.google_place_id = '';
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions) {
                    predictions.forEach(function (prediction) {
                        console.log(JSON.stringify(prediction));
                        me.autocompleteItems.push(prediction);
                    });
                }
            });
        });
    };
    AddPlacePage.prototype.chooseItem = function (item) {
        console.log('chooseItem : ', item);
        this.getPlaceDetail(item.place_id);
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
        this.google_place_id = item.place_id;
        this.callGoogleReviewAPI(this.google_place_id);
    };
    AddPlacePage.prototype.callGoogleReviewAPI = function (google_place_id) {
        var _this = this;
        this.webservice.getGoogleReview(google_place_id)
            .then(function (responce) {
            _this.reviewData = responce;
            console.log('getGoogleReview : responce ', _this.reviewData.result.reviews);
            //console.log('getGoogleReview : responce ', JSON.stringify(responce));
            _this.reviewDataList = [];
            if (_this.reviewData.result.reviews) {
                console.log(JSON.stringify(_this.reviewData.result.reviews));
                _this.reviewDataList = _this.reviewData.result.reviews;
            }
        });
    };
    AddPlacePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('accessToken').then(function (token) {
            console.log('MyPlacesPage: ngOnInit: token from storage : ', token);
            _this.accessToken = token;
            _this.initMap(_this.lat, _this.lng);
            _this.initPlacedetails();
            if (_this.editPlace && _this.placeId) {
                _this.callGetPlaceByIdAPI();
            }
        });
    };
    AddPlacePage.prototype.callGetPlaceByIdAPI = function () {
        var _this = this;
        this.loader.showLoader();
        this.webservice.getPlaceById(this.accessToken, this.placeId)
            .then(function (responce) {
            var resp = responce;
            console.log('getPlaceById : responce ', responce);
            console.log('getPlaceById : responce ', JSON.stringify(responce));
            if (responce) {
                _this.placeByIdData = resp.data;
                _this.lat = parseFloat(_this.placeByIdData.lat);
                _this.lng = parseFloat(_this.placeByIdData.lng);
                _this.title = _this.placeByIdData.title;
                _this.description = _this.placeByIdData.description;
                _this.details = _this.placeByIdData.details;
                _this.link1 = _this.placeByIdData.link1;
                _this.link2 = _this.placeByIdData.link2;
                _this.link3 = _this.placeByIdData.link3;
                _this.link4 = _this.placeByIdData.link4;
                _this.reviewDataList = _this.placeByIdData.reviews_by_google;
                _this.google_place_id = _this.placeByIdData.place_id;
                _this.autocomplete.query = _this.placeByIdData.destination;
                _this.initMap(_this.lat, _this.lng);
            }
            _this.loader.hideLoader();
        }).catch(function (err) {
        });
    };
    AddPlacePage.prototype.gotoSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    AddPlacePage.prototype.Save = function () {
        if (!this.validate()) {
            return;
        }
        if (this.editPlace) {
            //user wants to edit then call Update place API
            this.callUpdatePlaceAPI();
        }
        else {
            //call Save place API
            this.callSavePlaceAPI();
        }
    };
    AddPlacePage.prototype.getPlaceDetail = function (place_id) {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                self.lat = place.geometry.location.lat();
                self.lng = place.geometry.location.lng();
                /*for (var i = 0; i < place.address_components.length; i++) {
                 let addressType = place.address_components[i].types[0];
                 let values = {
                 short_name: place.address_components[i]['short_name'],
                 long_name: place.address_components[i]['long_name']
                 }
                 if(self.placedetails.components[addressType]) {
                 self.placedetails.components[addressType].set = true;
                 self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                 self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                 }
                 }*/
                // set place in map
                self.map.setCenter(place.geometry.location);
                self.createMapMarker(place);
                // populate
                self.address.set = true;
                //console.log('page > getPlaceDetail > details > ', self.placedetails);
            }
            else {
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    };
    AddPlacePage.prototype.initMap = function (lat, lng) {
        console.log('lat lng ******** ', lat, lng);
        var point = { lat: lat, lng: lng };
        var divMap = document.getElementById('map');
        this.map = new google.maps.Map(divMap, {
            center: point,
            zoom: 15,
            disableDefaultUI: true,
            draggable: true,
            zoomControl: true
        });
        var marker = new google.maps.Marker({
            map: this.map,
            position: point
        });
        this.markers.push(marker);
    };
    AddPlacePage.prototype.createMapMarker = function (place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: this.map,
            position: placeLoc
        });
        this.markers.push(marker);
    };
    AddPlacePage.prototype.initPlacedetails = function () {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short: '', long: '' },
                street_number: { set: false, short: '', long: '' },
                sublocality_level_1: { set: false, short: '', long: '' },
                locality: { set: false, short: '', long: '' },
                administrative_area_level_2: { set: false, short: '', long: '' },
                administrative_area_level_1: { set: false, short: '', long: '' },
                country: { set: false, short: '', long: '' },
                postal_code: { set: false, short: '', long: '' },
                postal_code_suffix: { set: false, short: '', long: '' },
            }
        };
    };
    AddPlacePage.prototype.callSavePlaceAPI = function () {
        var _this = this;
        var savePlaceJson = {
            "title": this.title,
            "description": this.description,
            "details": this.details,
            "link1": this.link1,
            "link2": this.link2,
            "link3": this.link3,
            "link4": this.link4,
            "destination": this.autocomplete.query,
            "place_id": this.google_place_id,
            "lat": this.lat, "lng": this.lng,
            "reviews_by_google": this.reviewDataList /*[
              {
                "author_name": "Ravikiran Gadgil",
                "author_url": "https://www.google.com/maps/contrib/118433362244225374545/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/--KtfdJOek4w/AAAAAAAAAAI/AAAAAAAAAAA/ACnBePb7ygfAOZmfMT6Vje_wJ4PlEmuYqg/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 4,
                "relative_time_description": "2 weeks ago",
                "text": "It is good company. Providing solutions within time & justified charged. Working atmosphere is good, here every one is ready to share knowledge and information. It is good for fresher as well as inexperienced person's.",
                "time": 1505990658,
                "$$hashKey": "object:67"
              }
            ]*/,
            "reviews": "",
            "status": 1
        };
        console.log('callSavePlaceAPI : request params : ', savePlaceJson);
        console.log('callSavePlaceAPI : request params : ', JSON.stringify(savePlaceJson));
        this.webservice.updatePlace(savePlaceJson, this.accessToken).then(function (result) {
            console.log('callSavePlaceAPI : Responce from server : ', result);
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    AddPlacePage.prototype.callUpdatePlaceAPI = function () {
        var _this = this;
        console.log('this.reviewDataList ----- ', this.reviewDataList, ' length --- ', this.reviewDataList.length);
        var updatePlaceJson = {
            "placesId": this.placeId,
            "title": this.title,
            "description": this.description,
            "details": this.details,
            "link1": this.link1,
            "link2": this.link2,
            "link3": this.link3,
            "link4": this.link4,
            "destination": this.autocomplete.query,
            "place_id": this.google_place_id,
            "lat": this.lat, "lng": this.lng,
            "reviews_by_google": this.reviewDataList /*[
              {
                "author_name": "Ravikiran Gadgil",
                "author_url": "https://www.google.com/maps/contrib/118433362244225374545/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/--KtfdJOek4w/AAAAAAAAAAI/AAAAAAAAAAA/ACnBePb7ygfAOZmfMT6Vje_wJ4PlEmuYqg/s128-c0x00000000-cc-rp-mo/photo.jpg",
                "rating": 4,
                "relative_time_description": "2 weeks ago",
                "text": "It is good company. Providing solutions within time & justified charged. Working atmosphere is good, here every one is ready to share knowledge and information. It is good for fresher as well as inexperienced person's.",
                "time": 1505990658,
                "$$hashKey": "object:67"
              }
            ]*/,
            "reviews": "",
            "status": 1
        };
        console.log('callUpdatePlaceAPI : request params : ', updatePlaceJson);
        console.log('callUpdatePlaceAPI : request params : ', JSON.stringify(updatePlaceJson));
        this.webservice.updatePlace(updatePlaceJson, this.accessToken).then(function (result) {
            console.log('callUpdatePlaceAPI : Responce from server : ', result);
            _this.loader.setMyPlacesUpdate(_this.title, _this.autocomplete.query);
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    AddPlacePage.prototype.validate = function () {
        if (!this.title || this.title.trim() == "") {
            this.showPopUp('Alert', 'Please enter title.');
            return false;
        }
        if (!this.description || this.description.trim() == "") {
            this.showPopUp('Alert', 'Please enter description.');
            return false;
        }
        if (!this.details || this.details.trim() == "") {
            this.showPopUp('Alert', 'Please enter recommendations.');
            return false;
        }
        if (!this.autocomplete.query || this.autocomplete.query.trim() == "") {
            this.showPopUp('Alert', 'Please enter destination.');
            return false;
        }
        if (!this.google_place_id || this.google_place_id.trim() == "") {
            this.showPopUp('Alert', 'Please enter valid destination.');
            return false;
        }
        if (this.link1.trim().length > 0) {
            this.link1 = this.link1.trim();
            if (this.link1.trim().charAt(0) === 'H') {
                this.link1 = this.link1.trim().replace('H', 'h');
            }
            if (this.link1.trim().charAt(1) === 'T') {
                this.link1 = this.link1.trim().replace('T', 't');
            }
            if (this.link1.trim().charAt(2) === 'T') {
                this.link1 = this.link1.trim().replace('T', 't');
            }
            if (this.link1.trim().charAt(3) === 'P') {
                this.link1 = this.link1.trim().replace('P', 'p');
            }
            if (this.link1.trim().charAt(4) === 'S') {
                this.link1 = this.link1.trim().replace('S', 's');
            }
            var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
            var re = new RegExp(urlRegex);
            var input = this.link1;
            var isValid = re.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid link1.');
                return false;
            }
        }
        if (this.link2.trim().length > 0) {
            this.link2 = this.link2.trim();
            if (this.link2.trim().charAt(0) === 'H') {
                this.link2 = this.link2.trim().replace('H', 'h');
            }
            if (this.link2.trim().charAt(1) === 'T') {
                this.link2 = this.link2.trim().replace('T', 't');
            }
            if (this.link2.trim().charAt(2) === 'T') {
                this.link2 = this.link2.trim().replace('T', 't');
            }
            if (this.link2.trim().charAt(3) === 'P') {
                this.link2 = this.link2.trim().replace('P', 'p');
            }
            if (this.link2.trim().charAt(4) === 'S') {
                this.link2 = this.link2.trim().replace('S', 's');
            }
            var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
            var re = new RegExp(urlRegex);
            var input = this.link2;
            var isValid = re.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid link2.');
                return false;
            }
        }
        if (this.link3.trim().length > 0) {
            this.link3 = this.link3.trim();
            if (this.link3.trim().charAt(0) === 'H') {
                this.link3 = this.link3.trim().replace('H', 'h');
            }
            if (this.link3.trim().charAt(1) === 'T') {
                this.link3 = this.link3.trim().replace('T', 't');
            }
            if (this.link3.trim().charAt(2) === 'T') {
                this.link3 = this.link3.trim().replace('T', 't');
            }
            if (this.link3.trim().charAt(3) === 'P') {
                this.link3 = this.link3.trim().replace('P', 'p');
            }
            if (this.link3.trim().charAt(4) === 'S') {
                this.link3 = this.link3.trim().replace('S', 's');
            }
            var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
            var re = new RegExp(urlRegex);
            var input = this.link3;
            var isValid = re.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid link3.');
                return false;
            }
        }
        if (this.link4.trim().length > 0) {
            this.link4 = this.link4.trim();
            if (this.link4.trim().charAt(0) === 'H') {
                this.link4 = this.link4.trim().replace('H', 'h');
            }
            if (this.link4.trim().charAt(1) === 'T') {
                this.link4 = this.link4.trim().replace('T', 't');
            }
            if (this.link4.trim().charAt(2) === 'T') {
                this.link4 = this.link4.trim().replace('T', 't');
            }
            if (this.link4.trim().charAt(3) === 'P') {
                this.link4 = this.link4.trim().replace('P', 'p');
            }
            if (this.link4.trim().charAt(4) === 'S') {
                this.link4 = this.link4.trim().replace('S', 's');
            }
            var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
            var re = new RegExp(urlRegex);
            var input = this.link4;
            var isValid = re.test(input);
            if (!isValid) {
                this.showPopUp('Alert', 'Please enter valid link4.');
                return false;
            }
        }
        return true;
    };
    AddPlacePage.prototype.showPopUp = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    return AddPlacePage;
}());
AddPlacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-place',template:/*ion-inline-start:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/add-place/add-place.html"*/'<ion-header>\n\n  <ion-navbar class="setup-Navbar" hideBackButton="true">\n    <ion-buttons (click)="gotoSearch()" left style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/search.png">\n      </button>\n    </ion-buttons>\n    <ion-title style="text-align: center;">\n      Add Places\n    </ion-title>\n    <ion-buttons right style="padding: 5px">\n      <button ion-button icon-only>\n        <img style="max-width: 70%;" src="assets/images/newsfeed/bell.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#ecf0f1" padding-top padding-bottom padding-left>\n  <p style="color:gray;font-size: 25px; margin-left: 25px;margin-bottom: 12px">Place</p>\n\n  <ion-row style=" padding-top: 10px;padding-bottom: 10px;">\n    <ion-card style="margin: 0;border-radius: 5px;">\n      <ion-card-content style="padding: 25px">\n\n        <div class="add-place-div" style="padding-right: 0">\n          <p class="add-place-div-title">Title</p>\n          <ion-item no-padding>\n          <ion-input class="add-place-item-divider" type="text" [(ngModel)]="title" ></ion-input>\n          </ion-item>\n        </div>\n\n        <div class="add-place-div">\n          <p class="add-place-div-title">Destination</p>\n          <ion-searchbar  style="padding: 0" class="add-place-item-divider" [(ngModel)]="autocomplete.query" placeholder="Enter a location" [showCancelButton]="true" (ionInput)="updateSearch()" ></ion-searchbar>\n          <!--<ion-input class="add-place-item-divider" type="text" [(ngModel)]="destination" placeholder="Enter a location"  ></ion-input>-->\n          <ion-list>\n            <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n              {{ item.description }}\n            </ion-item>\n          </ion-list>\n\n        </div>\n\n        <div style="margin: 20px 10px 10px 0px;color: gray">Description of place</div>\n        <textarea class="setup-textarea" [(ngModel)]="description" ></textarea>\n\n        <div style="margin: 15px 10px 10px 0px;color: gray">Detail and recommendations of what to do</div>\n        <textarea class="setup-textarea" [(ngModel)]="details"></textarea>\n\n        <div style="margin: 15px 10px 10px 0px;color: gray">Reviews from google</div>\n        <!--<textarea class="setup-textarea"></textarea>-->\n\n        <ion-card *ngFor="let review of reviewDataList">\n          <ion-card-content *ngIf="review.rating">\n            <button style="height: 100%;padding: 0px;" ion-button icon-left clear >\n              <img col-4 style="max-width: 25%;margin-left: -10%;border-radius: 50%;" src="{{review.profile_photo_url}}" align="center">\n              <div col-8>\n              <div class="row" style="overflow: hidden;padding-left: 5px;color: #007aff;text-transform: none;">{{review.author_name}}</div>\n              <div class="row" style="padding-left: 5px;color: gray;text-transform: none;text-align: left;margin-top: 5px;">{{review.rating}} out of 5</div>\n              </div>\n            </button>\n            <ion-item text-wrap style="margin-top: 10%">{{review.text}}</ion-item>\n            <!--<ion-item>{{review.author_name}}</ion-item>-->\n          </ion-card-content>\n        </ion-card>\n\n        <div class="add-place-image" id="map"></div>\n        <!--<img class="add-place-image" src="assets/images/newsfeed/img2.png">-->\n\n        <div class="row add-place-input"  >\n          <ion-item no-lines style="padding: 0%">\n            <div item-left>link 1: </div>\n            <ion-item>\n            <ion-input no-lines class="add-place-input-inside" item-right  [(ngModel)]="link1" type="text"></ion-input>\n            </ion-item>\n          </ion-item>\n        </div>\n\n        <div class="row add-place-input"  >\n          <ion-item no-lines style="padding: 0%">\n            <div item-left>link 2: </div>\n            <ion-item>\n            <ion-input no-lines class="add-place-input-inside" item-right  [(ngModel)]="link2" type="text"></ion-input>\n            </ion-item>\n          </ion-item>\n        </div>\n\n        <div class="row add-place-input"  >\n          <ion-item no-lines style="padding: 0%">\n            <div item-left>link 3: </div>\n            <ion-item>\n            <ion-input no-lines class="add-place-input-inside" item-right  [(ngModel)]="link3" type="text" ></ion-input>\n            </ion-item>\n          </ion-item>\n        </div>\n\n        <div class="row add-place-input"  >\n          <ion-item no-lines style="padding: 0%">\n            <div item-left>link 4: </div>\n            <ion-item>\n            <ion-input no-lines class="add-place-input-inside" item-right  [(ngModel)]="link4" type="text" ></ion-input>\n            </ion-item>\n          </ion-item>\n        </div>\n\n        <div class="add-place-line"></div>\n\n        <ion-row style="margin-top: 5px">\n\n          <ion-col *ngIf="!editPlace" col-5 style="padding: 0px">\n            <button  style="background: url(\'assets/images/facebook_button.png\');background-repeat: no-repeat;background-position: center;background-size: 100% 100%;" class="add-place-fb-button" ion-button icon-left>\n              <!--<img style="width: 10%;margin-right: 5px;margin-left: 15px;height: 50%" src="assets/images/createtrail/facebook_icon.png" align="center">\n              <div>Share to Facebook</div>-->\n            </button>\n          </ion-col>\n\n          <ion-col col-3 style="padding: 0px">\n            <button class="add-place-btn" ion-button (click)="Save()">Save</button>\n          </ion-col>\n\n          <ion-col *ngIf="!editPlace" col-4 style="padding: 0px">\n            <button class="add-place-btn" ion-button >Add to Trails</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/amit/Desktop/reactApp/MyBreadCrumbs/src/pages/add-place/add-place.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_web_services_web_services__["a" /* WebServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__providers_Constant__["a" /* Constant */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddPlacePage);

//# sourceMappingURL=add-place.js.map

/***/ })

});
//# sourceMappingURL=14.js.map