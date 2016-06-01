import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'my-app',
  directives: [],
  template: `
    <h1 *ngFor="#keg of kegs"> {{ keg.name }} {{ keg.type }} {{ keg.ABV }} </h1>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Tricerahops", "IPA", "5.6%", 0),
      new Keg("Marionberry", "Cider", "6.5%", 1)
    ];
  }
}
