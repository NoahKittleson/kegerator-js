import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { KegDisplayComponent } from './keg-display.component';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [NewKegComponent, KegDisplayComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
      (click)="kegClicked(currentKeg)"
      [class.selected]="currentKeg === selectedKeg"
      [keg]="currentKeg">
    </keg-display>
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
  kegClicked(clickedKeg : Keg) {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  addKeg(newKeg : Keg) {
    newKeg.id = this.kegList.length;
    this.kegList.push(newKeg);
  }
}
