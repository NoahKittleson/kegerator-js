import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { KegDisplayComponent } from './keg-display.component';
import { BeerPipe } from './beer.pipe';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [BeerPipe],
  directives: [NewKegComponent, KegDisplayComponent],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">All</option>
      <option value="dark">Dark Beers</option>
      <option value="IPA">IPA</option>
      <option value="Cider">Cider</option>
      <option value="Stout">Stout</option>
    </select>
    <keg-display *ngFor="#currentKeg of kegList | beerType:filterBeer"
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
  public filterBeer: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg : Keg) {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
    this.selectedKeg
}
  addKeg(newKeg : Keg) {
    newKeg.id = this.kegList.length;
    this.kegList.push(newKeg);
  }
  onChange(filterOption) {
    this.filterBeer = filterOption;
    console.log(this.filterBeer);
  }
}
