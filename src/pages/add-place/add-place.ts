import {Component, NgZone} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {WebServicesProvider} from "../../providers/web-services/web-services";
import {Storage} from "@ionic/storage";
import {Constant} from "../../providers/Constant";

/**
 * Generated class for the AddPlacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  accessToken: any;
  editPlace: boolean = false;
  placeId: any;

  autocompleteItems;
  autocomplete;
  service = new google.maps.places.AutocompleteService();

  address: any = {
    place: '',
    set: false,
  };
  placesService: any;
  map: any;
  markers = [];
  placedetails: any;

  /*populated data fields binds from view*/
  description: any = '';
  title: any = '';
  details: any = '';
  link1: any = '';
  link2: any = '';
  link3: any = '';
  link4: any = '';
  google_place_id: any = '';
  lat: number = 0;
  lng: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public webservice: WebServicesProvider, public storage: Storage,
              public zone: NgZone, public loader: Constant, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.editPlace = this.navParams.data.edit;
    this.placeId = this.navParams.data.id;
    console.log('this.editPlace ---- ', this.editPlace);
    console.log('this.placeId ---- ', this.placeId);

    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };

  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    this.google_place_id = '';
    let me = this;
    this.service.getPlacePredictions({input: this.autocomplete.query}, function (predictions, status) {
      me.autocompleteItems = [];
      me.zone.run(function () {
        if(predictions) {
          predictions.forEach(function (prediction) {
            console.log(JSON.stringify(prediction));
            me.autocompleteItems.push(prediction);
          });
        }
      });
    });
  }

  chooseItem(item) {
    console.log('chooseItem : ',item);
    this.getPlaceDetail(item.place_id);
    this.autocompleteItems = [];
    this.autocomplete.query = item.description;
    this.google_place_id = item.place_id;
    this.callGoogleReviewAPI(this.google_place_id);
  }

  reviewData:any;
  reviewDataList:any;
  callGoogleReviewAPI(google_place_id){
    this.webservice.getGoogleReview(google_place_id)
      .then(responce => {
        this.reviewData=responce;
        console.log('getGoogleReview : responce ', this.reviewData.result.reviews);
        //console.log('getGoogleReview : responce ', JSON.stringify(responce));
        this.reviewDataList = [];
        if(this.reviewData.result.reviews){
          console.log(JSON.stringify(this.reviewData.result.reviews));
          this.reviewDataList=this.reviewData.result.reviews;
        }

      });
  }

  ngOnInit() {
    this.storage.get('accessToken').then(token => {
      console.log('MyPlacesPage: ngOnInit: token from storage : ', token);
      this.accessToken = token;

      this.initMap(this.lat, this.lng);
      this.initPlacedetails();

      if (this.editPlace && this.placeId) {
        this.callGetPlaceByIdAPI();
      }
    });

  }

  placeByIdData:any;
  callGetPlaceByIdAPI() {
    this.loader.showLoader();
    this.webservice.getPlaceById(this.accessToken, this.placeId)
      .then(responce => {
        let resp : any =  responce;
        console.log('getPlaceById : responce ', responce);
        console.log('getPlaceById : responce ', JSON.stringify(responce));
        if (responce) {
          this.placeByIdData = resp.data;
          this.lat = parseFloat(this.placeByIdData.lat);
          this.lng = parseFloat(this.placeByIdData.lng);

          this.title = this.placeByIdData.title;
          this.description = this.placeByIdData.description;
          this.details = this.placeByIdData.details;
          this.link1 = this.placeByIdData.link1;
          this.link2 = this.placeByIdData.link2;
          this.link3 = this.placeByIdData.link3;
          this.link4 = this.placeByIdData.link4;

          this.reviewDataList = this.placeByIdData.reviews_by_google;

          this.google_place_id=this.placeByIdData.place_id;

          this.autocomplete.query=this.placeByIdData.destination;
          this.initMap(this.lat, this.lng);

        }
        this.loader.hideLoader();
      }).catch(err => {
    });
  }

  gotoSearch() {
    this.navCtrl.push('SearchPage');
  }

  Save() {

    if(!this.validate()) {
      return;
    }

    if (this.editPlace) {
      //user wants to edit then call Update place API
      this.callUpdatePlaceAPI();
    } else {
      //call Save place API
      this.callSavePlaceAPI();
    }
  }

  private getPlaceDetail(place_id: string): void {
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
        self.lat=place.geometry.location.lat();
        self.lng=place.geometry.location.lng();
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
      } else {
        console.log('page > getPlaceDetail > status > ', status);
      }
    }
  }

  private initMap(lat, lng) {

    console.log('lat lng ******** ',lat,lng);
    var point = {lat: lat, lng: lng};
    let divMap = (<HTMLInputElement>document.getElementById('map'));
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
  }

  private createMapMarker(place: any): void {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc
    });
    this.markers.push(marker);
  }

  private initPlacedetails() {
    this.placedetails = {
      address: '',
      lat: '',
      lng: '',
      components: {
        route: {set: false, short: '', long: ''},
        street_number: {set: false, short: '', long: ''},
        sublocality_level_1: {set: false, short: '', long: ''},
        locality: {set: false, short: '', long: ''},
        administrative_area_level_2: {set: false, short: '', long: ''},
        administrative_area_level_1: {set: false, short: '', long: ''},
        country: {set: false, short: '', long: ''},
        postal_code: {set: false, short: '', long: ''},
        postal_code_suffix: {set: false, short: '', long: ''},
      }
    };
  }

  callSavePlaceAPI() {

    let savePlaceJson = {
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
      "reviews_by_google": this.reviewDataList/*[
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
    }


    console.log('callSavePlaceAPI : request params : ', savePlaceJson);
    console.log('callSavePlaceAPI : request params : ', JSON.stringify(savePlaceJson));
    this.webservice.updatePlace(savePlaceJson, this.accessToken).then(result => {
      console.log('callSavePlaceAPI : Responce from server : ', result);
      this.navCtrl.pop();
    }, (err) => {
      console.log(err);
    });


  }

  callUpdatePlaceAPI() {

    console.log('this.reviewDataList ----- ',this.reviewDataList,' length --- ',this.reviewDataList.length);
    let updatePlaceJson = {
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
      "reviews_by_google": this.reviewDataList/*[
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
    }

    console.log('callUpdatePlaceAPI : request params : ', updatePlaceJson);
    console.log('callUpdatePlaceAPI : request params : ', JSON.stringify(updatePlaceJson));
    this.webservice.updatePlace(updatePlaceJson, this.accessToken).then(result => {
      console.log('callUpdatePlaceAPI : Responce from server : ', result);
      this.loader.setMyPlacesUpdate(this.title, this.autocomplete.query);
      this.navCtrl.pop();
    }, (err) => {
      console.log(err);
    });

  }

  validate(): boolean {

    if(!this.title || this.title.trim() == "") {
      this.showPopUp('Alert', 'Please enter title.');
      return false;
    }

    if(!this.description || this.description.trim() == "") {
      this.showPopUp('Alert', 'Please enter description.');
      return false;
    }

    if(!this.details || this.details.trim() == "") {
      this.showPopUp('Alert', 'Please enter recommendations.');
      return false;
    }

    if(!this.autocomplete.query || this.autocomplete.query.trim() == "") {
      this.showPopUp('Alert', 'Please enter destination.');
      return false;
    }

    if(!this.google_place_id || this.google_place_id.trim() == "") {
      this.showPopUp('Alert', 'Please enter valid destination.');
      return false;
    }



    if(this.link1.trim().length > 0) {
      this.link1 = this.link1.trim();
      if(this.link1.trim().charAt(0) === 'H') {
        this.link1 = this.link1.trim().replace('H','h');
      }
      if(this.link1.trim().charAt(1) === 'T') {
        this.link1 = this.link1.trim().replace('T','t');
      }
      if(this.link1.trim().charAt(2) === 'T') {
        this.link1 = this.link1.trim().replace('T','t');
      }
      if(this.link1.trim().charAt(3) === 'P') {
        this.link1 = this.link1.trim().replace('P','p');
      }
      if(this.link1.trim().charAt(4) === 'S') {
        this.link1 = this.link1.trim().replace('S','s');
      }
      let urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
      let re = new RegExp(urlRegex);
      let input = this.link1;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid link1.');
        return false;
      }
    }
    if(this.link2.trim().length > 0) {
      this.link2 = this.link2.trim();
      if(this.link2.trim().charAt(0) === 'H') {
        this.link2 = this.link2.trim().replace('H','h');
      }
      if(this.link2.trim().charAt(1) === 'T') {
        this.link2 = this.link2.trim().replace('T','t');
      }
      if(this.link2.trim().charAt(2) === 'T') {
        this.link2 = this.link2.trim().replace('T','t');
      }
      if(this.link2.trim().charAt(3) === 'P') {
        this.link2 = this.link2.trim().replace('P','p');
      }
      if(this.link2.trim().charAt(4) === 'S') {
        this.link2 = this.link2.trim().replace('S','s');
      }
      let urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
      let re = new RegExp(urlRegex);
      let input = this.link2;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid link2.');
        return false;
      }
    }
    if(this.link3.trim().length > 0) {
      this.link3 = this.link3.trim();
      if(this.link3.trim().charAt(0) === 'H') {
        this.link3 = this.link3.trim().replace('H','h');
      }
      if(this.link3.trim().charAt(1) === 'T') {
        this.link3 = this.link3.trim().replace('T','t');
      }
      if(this.link3.trim().charAt(2) === 'T') {
        this.link3 = this.link3.trim().replace('T','t');
      }
      if(this.link3.trim().charAt(3) === 'P') {
        this.link3 = this.link3.trim().replace('P','p');
      }
      if(this.link3.trim().charAt(4) === 'S') {
        this.link3 = this.link3.trim().replace('S','s');
      }
      let urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
      let re = new RegExp(urlRegex);
      let input = this.link3;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid link3.');
        return false;
      }
    }
    if(this.link4.trim().length > 0) {
      this.link4 = this.link4.trim();
      if(this.link4.trim().charAt(0) === 'H') {
        this.link4 = this.link4.trim().replace('H','h');
      }
      if(this.link4.trim().charAt(1) === 'T') {
        this.link4 = this.link4.trim().replace('T','t');
      }
      if(this.link4.trim().charAt(2) === 'T') {
        this.link4 = this.link4.trim().replace('T','t');
      }
      if(this.link4.trim().charAt(3) === 'P') {
        this.link4 = this.link4.trim().replace('P','p');
      }
      if(this.link4.trim().charAt(4) === 'S') {
        this.link4 = this.link4.trim().replace('S','s');
      }
      let urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
      let re = new RegExp(urlRegex);
      let input = this.link4;
      let isValid = re.test(input);
      if(!isValid){
        this.showPopUp('Alert', 'Please enter valid link4.');
        return false;
      }
    }

    return true;
  }

  showPopUp(title : string,msg : string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

}
