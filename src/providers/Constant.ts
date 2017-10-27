import {LoadingController} from "ionic-angular";
import {Injectable} from "@angular/core";

@Injectable()
export class Constant{

  public loading: any;
  public myPlacesUpdate: any = {
    title: '',
    location: ''
  };

  constructor(public loadingCtrl: LoadingController){

  }

  public showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  public hideLoader(){
    this.loading.dismiss();
  }

  public setMyPlacesUpdate(title: string, location: string) {
    this.myPlacesUpdate.title = title;
    this.myPlacesUpdate.location = location;
  }

  public getMyPlacesUpdates() {
    return this.myPlacesUpdate;
  }
}
