import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTrailsPage } from './my-trails';

@NgModule({
  declarations: [
    MyTrailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTrailsPage),
  ],
})
export class MyTrailsPageModule {}
