import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component ({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div>
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
      new Keg("Marionberry", "Cider", "6.5%", 1),
      new Keg("Dead Guy", "Ale", "7.9%", 2),
      new Keg("Arrogant Bastard", "Stout", "9.9%", 3),
      new Keg("Kraken", "Red", "6.7%", 4),
      new Keg("Hoppy Little Accident", "IPA", "5.3%", 5),
      new Keg("Blood Orange", "Wheat", "4.4%", 6),
      new Keg("Plum Loco", "Sour", "5.1%", 7),
      new Keg("Pabst", "Shit", "4%", 8),
      new Keg("Rainier", "Shit", "4.1%", 9),
      new Keg("Jagged Little Pils", "Pilsner", "4.8%", 10),
      new Keg("Chocolate Shake", "Porter", "6.8%", 11),
      new Keg("El Heffe", "Heffeweizen", "5.5%", 12),
      new Keg("Arrogant Bastard", "Stout", "8.9%", 13),
      new Keg("Sleepy Hollow", "Brown", "6.1%", 14)
    ];
  }
}
