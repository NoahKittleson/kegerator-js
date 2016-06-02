import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="container">
      <div class="col-md-2">
        <span *ngIf="kegLeft() === 4"><img src="././resources/images/full.png" class="fuckin-barrel"></span>
        <span *ngIf="kegLeft() === 3"><img src="././resources/images/three-quarters.png" class="fuckin-barrel"></span>
        <span *ngIf="kegLeft() === 2"><img src="././resources/images/half.png" class="fuckin-barrel"></span>
        <span *ngIf="kegLeft() === 1"><img src="././resources/images/quarter.png" class="fuckin-barrel"></span>
      </div>
      <div class="col-md-4">
        <label (click) = "toggleShow()">{{ keg.name }} {{ keg.type }} {{ keg.ABV }}</label>
        <div *ngIf="show === true">
          <p>Pints Left in Keg: {{ keg.pints }}</p> 
          <p>Keg Empty? {{ keg.empty }}</p>
        </div>
      </div>
      <div class="col-md-2">
        <span *ngIf="keg.empty === false"><button (click)="takePint()" id="overwrite">TAKE PINT</button></span>
        <span *ngIf="keg.empty === true"><img id ="soccer-kablooie" src="././resources/images/kablooie.jpg"></span>
      </div>
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
    if(this.keg.pints === 0) {
      this.keg.empty = true;
    } else {
      this.keg.pints -= 1;
    }
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
