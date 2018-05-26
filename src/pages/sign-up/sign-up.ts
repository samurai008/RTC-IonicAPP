import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FillProfileDetailsPage } from '../fill-profile-details/fill-profile-details';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage implements OnInit {
  category;
  loginForm: FormGroup;
  signUpForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = 'login';
  }

  ngOnInit() {
    // Login form
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  login() {
    console.log(this.loginForm.value);
    this.navCtrl.setRoot(FillProfileDetailsPage);
  }

  signUp() {}

}
