import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { FillProfileDetailsPage } from '../pages/fill-profile-details/fill-profile-details';
import { BusinessListComponent } from '../components/business-list/business-list';
import { MemberListPage } from '../pages/member-list/member-list';
import { MemberCardComponent } from '../components/member-card/member-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    FillProfileDetailsPage,
    BusinessListComponent,
    MemberListPage,
    MemberCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    FillProfileDetailsPage,
    BusinessListComponent,
    MemberListPage,
    MemberCardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
