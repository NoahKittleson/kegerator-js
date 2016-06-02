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
    <nav class="navbar navbar-default">
      <button class="button-nav" (click)="onChange('dark')">DARK BEERS</button>
      <button class="button-nav" (click)="onChange('hoppy')">HOPPY BEER</button>
      <button class="button-nav" (click)="onChange('Cider')">CIDER</button>
      <button class="button-nav-middle" (click)="onChange('all')">YOUR KEGS</button>
      <button class="button-nav" (click)="onChange('light')">LIGHT BEER</button>
      <button class="button-nav" (click)="onChange('Sour')">SOUR BEER</button>
      <button class="button-nav" (click)="onChange('shit')">SHITTY BEER</button>
    </nav>
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
