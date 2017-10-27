import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrailDetailPage } from './trail-detail';

@NgModule({
  declarations: [
    TrailDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TrailDetailPage),
  ],
})
export class TrailDetailPageModule {}
