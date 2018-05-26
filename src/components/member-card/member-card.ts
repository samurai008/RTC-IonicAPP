import { Component } from '@angular/core';

/**
 * Generated class for the MemberCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'member-card',
  templateUrl: 'member-card.html'
})
export class MemberCardComponent {

  text: string;

  constructor() {
    console.log('Hello MemberCardComponent Component');
    this.text = 'Hello World';
  }

}
