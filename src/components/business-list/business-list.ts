import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the BusinessListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'business-list',
  templateUrl: 'business-list.html'
})
export class BusinessListComponent implements OnInit {
  private _busCat;

  @Input()
  set busCat(business) {
    this._busCat = business
  }

  text: string;

  constructor() {
    console.log('Hello BusinessListComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
  }

  get busCat() {
    return this._busCat;
  }

}
