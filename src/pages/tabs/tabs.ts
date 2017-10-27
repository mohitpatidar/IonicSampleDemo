import {Component, ViewChild} from '@angular/core';

import {ActionSheetController, IonicPage, NavController, NavParams, Tabs} from "ionic-angular";

@IonicPage()
@Component({
  selector:'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  private  tabSelectedIndex : number=1;

  tab1Root = 'NewsfeedPage';
  tab2Root = 'RecordTrailPage';
  tab3Root = '';
  tab4Root = 'MyProfilePage';



  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController) {
    if (this.navParams.data){
      if (this.navParams.data.page=='mytrail'){
        this.tab3Root = 'MyTrailsPage';
      }else if (this.navParams.data.page=='bookmark'){
        this.tab3Root = 'BookmarkedTrailsPage';
      }else if (this.navParams.data.page=='uploaded'){
        this.tab3Root = 'UploadedTrailsPage';
      }else if (this.navParams.data.page=='myplace'){
        this.tab3Root = 'MyPlacesPage';
      }else if (this.navParams.data.page=='createtrail'){
        this.tab3Root = 'CreateTrailPage';
      }
      this.tabSelectedIndex=this.navParams.data.tab;
    }

  }

  openSheetTrails() {

    let actionSheet = this.actionSheetCtrl.create({

      buttons: [
        {
          text: 'My Trails',
          handler: () => {
            this.navCtrl.setRoot('TabsPage',{tab: 2,page: 'mytrail'});
          }
        },{
          text: 'Bookmarked Trails',
          handler: () => {
            this.navCtrl.setRoot('TabsPage',{tab: 2,page: 'bookmark'});
          }
        },{
          text: 'Uploaded Trails',
          handler: () => {
            this.navCtrl.setRoot('TabsPage',{tab: 2,page: 'uploaded'});
          }
        },{
          text: 'My Places',
          handler: () => {
            this.navCtrl.setRoot('TabsPage',{tab: 2,page: 'myplace'});
          }
        },{
          text: 'Create Trail',
          handler: () => {
            this.navCtrl.setRoot('TabsPage',{tab: 2,page: 'createtrail'});
          }
        }
      ]
    });
    actionSheet.present();
  }
}
