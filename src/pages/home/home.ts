import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MemberListPage } from '../member-list/member-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  businessList;

  constructor(public navCtrl: NavController) {
    this.businessList = [{id:1, 'title':'Books'}, {id:2, 'title':'Electronics'}, {id:3, title:'Jobs'}];
  }

  goToBusiness(business) {
    console.log(business);
    this.navCtrl.push(MemberListPage, business);
  }

}
