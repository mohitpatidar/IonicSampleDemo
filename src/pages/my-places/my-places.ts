import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {WebServicesProvider} from "../../providers/web-services/web-services";
import {Storage} from "@ionic/storage";
import {Constant} from "../../providers/Constant";

/**
 * Generated class for the MyPlacesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-places',
  templateUrl: 'my-places.html',
})
export class MyPlacesPage {
  accessToken: any;
  tapIndex: any;
  myPlacesDataList:any = [];
  searchPlacesDataList:any = [];
  searchingResultTxt: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public webservice: WebServicesProvider, public storage: Storage,public loader:Constant) {
  }

  ngOnInit(){
    this.storage.get('accessToken').then(token => {
      this.accessToken = token;
      this.getListMyPlacesAPI();
    });
  }

  getListMyPlacesAPI() {
    this.loader.showLoader();
    this.webservice.getListMyPlaces(this.accessToken)
      .then(responce => {
        this.myPlacesDataList=responce.data;
        this.loader.hideLoader();
      }).catch(err => {
        this.loader.hideLoader();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPlacesPage');
  }

  ionViewDidEnter() {
    /*if(this.tapIndex) {*/
    try{
      if(this.myPlacesDataList[this.tapIndex].title && this.myPlacesDataList[this.tapIndex].title != '') {
        this.myPlacesDataList[this.tapIndex].title = this.loader.getMyPlacesUpdates().title;
      }
      if(this.myPlacesDataList[this.tapIndex].destination && this.myPlacesDataList[this.tapIndex].destination != '') {
        this.myPlacesDataList[this.tapIndex].destination = this.loader.getMyPlacesUpdates().location;
      }
      this.loader.setMyPlacesUpdate('','');
    } catch (e) {
    }
    /*}*/
}

  editMyPlace(id, indx, title, location){
    this.tapIndex = indx;
    this.loader.setMyPlacesUpdate(title,location);
    this.navCtrl.push('AddPlacePage',{id:id,edit:true});
  }

  gotoAddPlace(){
      this.navCtrl.push('AddPlacePage',{edit:false});
  }

  gotoSearch(){
    this.navCtrl.push('SearchPage');
  }

  deletePlace(placeId: string, indx) {
    this.webservice.deletePost(placeId, this.accessToken)
      .then(response => {
        this.myPlacesDataList.splice(indx, 1);
    }).catch(err => {
    });
  }

  presentDeleteConfirm(placeId: string, indx) {
    const alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Do you want to delete this place?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.deletePlace(placeId, indx);
          }
        }
      ]
    });
    alert.present();
  }

  presentSearchPrompt() {
    const alert = this.alertCtrl.create({
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
          handler: data => {}
        },
        {
          text: 'Search',
          handler: data => {
            if(data.txt.trim().length > 0) {
              this.searchPlace(data.txt);
            }
          }
        }
      ]
    });
    alert.present();
  }

  searchPlace(txt: string) {
    this.searchPlacesDataList = [];
    this.searchingResultTxt = txt;
    console.log(this.searchingResultTxt);
    this.webservice.searchPlace(txt, this.accessToken).then(response => {
      console.log(JSON.stringify(response));
      let resp : any = response;
      this.searchPlacesDataList = resp.data;
    }).catch(err => {
    });
  }

  clearResult() {
    this.searchingResultTxt = '';
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.webservice.getListMyPlaces(this.accessToken)
      .then(responce => {
        this.myPlacesDataList=responce.data;
        refresher.complete();
      }).catch(err => {
      refresher.complete();
    });
  }
}
