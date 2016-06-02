import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h2>Add a Keg</h2>
      <input placeholder="Beer Name" class="col-md-3 input-lg" #newKegName>
      <input placeholder="Type of Beer" class="col-md-3 input-lg" #newKegType>
      <input placeholder="ABV of Beer" class="col-md-3 input-lg" #newKegABV>
      <button (click)="addKeg(newKegName, newKegType, newKegABV)" id = "adjust" class="btn-success btn-lg">ADD</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(kegName : HTMLInputElement, kegType : HTMLInputElement, kegABV : HTMLInputElement) {
    var newKeg = new Keg (kegName.value, kegType.value, kegABV.value, 0);
    this.onSubmitNewKeg.emit(newKeg);
  }
}
