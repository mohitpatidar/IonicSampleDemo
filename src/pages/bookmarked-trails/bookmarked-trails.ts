import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookmarkedTrailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookmarked-trails',
  templateUrl: 'bookmarked-trails.html',
})
export class BookmarkedTrailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarkedTrailsPage');
  }

  gotoSearch(){
    this.navCtrl.push('SearchPage');
  }



}
