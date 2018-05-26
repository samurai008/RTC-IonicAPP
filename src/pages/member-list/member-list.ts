import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MemberListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberListPage {
  title;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id = this.navParams.get('id');
    this.title = this.navParams.get('title');
    console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberListPage');
  }

}
