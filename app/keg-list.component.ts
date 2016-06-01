import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [NewKegComponent],
  template: `
    <new-keg (onSubmitNewKeg)="addKeg($event)" [keg]="selectedKeg"></new-keg>
  `
})
export class KegListComponent {
  public kegList : Keg[];
  public onKegSelect : EventEmitter<Keg>;
  public selectedKeg : Keg;

  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  addKeg(Keg)
}
