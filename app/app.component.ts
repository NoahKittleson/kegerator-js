import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component ({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
  <h1>Your Kegs</h1>
    <keg-list
      [kegList] = "kegs">
    </keg-list>
  </div>

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
