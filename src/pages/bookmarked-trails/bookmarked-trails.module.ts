import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookmarkedTrailsPage } from './bookmarked-trails';

@NgModule({
  declarations: [
    BookmarkedTrailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookmarkedTrailsPage),
  ],
})
export class BookmarkedTrailsPageModule {}
