import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadedTrailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uploaded-trails',
  templateUrl: 'uploaded-trails.html',
})
export class UploadedTrailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadedTrailsPage');
  }

  gotoSearch(){
    this.navCtrl.push('SearchPage');
  }
}
