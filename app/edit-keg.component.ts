import { Component } from 'angular2/core';
import { Keg } from "./keg.model";

@Component ({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <div class="col-md-4">
      <form>
        <input placeholder="Beer Name" [(ngModel)]="keg.name">
        <input placeholder="Beer Type" [(ngModel)]="keg.type">
        <input placeholder="Beer ABV"  [(ngModel)]="keg.ABV">
      </form>
      <button id="replace"(click)="resetKeg()">Replace Keg</button>
    </div>
  `
})

export class EditKegComponent {
  public keg : Keg;
  resetKeg() {
    this.keg.pints = 124;
    this.keg.empty = false;
  }
}
