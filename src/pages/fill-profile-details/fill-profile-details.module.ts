import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FillProfileDetailsPage } from './fill-profile-details';

@NgModule({
  declarations: [
    FillProfileDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FillProfileDetailsPage),
  ],
})
export class FillProfileDetailsPageModule {}
