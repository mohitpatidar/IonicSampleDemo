import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyTrailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-trails',
  templateUrl: 'my-trails.html',
})
export class MyTrailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTrailsPage');
  }

  gotoSearch(){
    this.navCtrl.push('SearchPage');
  }

  gotoTrailDetail(){
    this.navCtrl.push('TrailDetailPage');
  }

}
