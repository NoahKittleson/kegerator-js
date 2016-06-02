import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="container">
    <span *inIf="keg.pints === 91"
      <label (click) = "toggleShow()">{{ keg.name }} {{ keg.type }} {{ keg.ABV }}</label>
      <p *ngIf="show === true">Pints Left in Keg: {{ keg.pints }} Keg Empty? {{ keg.empty }}</p>
      <button (click)="takePint()" id="overwrite">TAKE PINT</button>
    </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
  public show: boolean = false;
  toggleShow() {
    this.show = !this.show;
  }
  takePint() {
    this.keg.pints -= 1;
  }
  kegLeft() {
    if(this.keg.pints > 93) {
      return 4;
    } else if(this.keg.pints > 62) {
      return 3;
    }else if(this.keg.pints > 31) {
      return 2;
    } else {
      return 1;
    }
  }
}
