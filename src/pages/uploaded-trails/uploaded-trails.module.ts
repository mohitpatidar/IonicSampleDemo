import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadedTrailsPage } from './uploaded-trails';

@NgModule({
  declarations: [
    UploadedTrailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadedTrailsPage),
  ],
})
export class UploadedTrailsPageModule {}
