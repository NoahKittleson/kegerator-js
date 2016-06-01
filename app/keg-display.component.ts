import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="container">
      <label (click) = "toggleShow()">{{ keg.name }} {{ keg.type }} {{ keg.ABV }}</label>
      <p *ngIf="show === true">{{ keg.pints }} {{ keg.empty }}</p>
    </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
  public show: boolean = false;
  toggleShow() {
    this.show = !this.show;
  }
}
