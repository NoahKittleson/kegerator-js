import { Component } from 'angular2/core';
import { EditKegComponent } from './edit-keg.component'
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [EditKegComponent],
  template: `
    <div class="container">
      <div class="col-md-2">
        <span *ngIf="kegLeft() === 4"><img src="././resources/images/full.png" class="fuckin-barrel"></span>
        <span *ngIf="kegLeft() === 3"><img src="././resources/images/three-quarters.png" class="fuckin-barrel"></span>
        <span *ngIf="kegLeft() === 2"><img src="././resources/images/half.png" class="fuckin-barrel"></span>
        <span *ngIf="kegLeft() === 1"><img src="././resources/images/quarter.png" class="fuckin-barrel"></span>
      </div>

      <div class="col-md-4">
        <div *ngIf="keg.pints > 0">
          <label (click) = "toggleShow()">{{ keg.name }} {{ keg.type }} {{ keg.ABV }}</label>
          <div *ngIf="show === true">
            <p>Pints Left in Keg: {{ keg.pints }}</p>
            <p>Keg Empty? {{ keg.empty }}</p>
          </div>
        </div>
        <div *ngIf="keg.pints === 0">
          <edit-keg [keg]="keg">
          </edit-keg>
        </div>
      </div>

      <div class="col-md-2">
        <span *ngIf="keg.pints >= .5"><button (click)="takePint(.5)" id="overwrite">POUR GLASS</button></span>
        <span *ngIf="keg.pints === 0"><img id ="soccer-kablooie" src="././resources/images/kablooie.jpg"></span>
      </div>

      <div class="col-md-2">
        <span *ngIf="keg.pints >= 1"><button (click)="takePint(1)" id="overwrite">POUR PINT</button></span>
        <span *ngIf="keg.pints === .5"><img src="././resources/images/skull.jpg" id="skull"></span>
        <span *ngIf="keg.pints === 0"><img id ="soccer-kablooie" src="././resources/images/kablooie.jpg"></span>
      </div>

      <div class="col-md-2">
        <span *ngIf="keg.pints >= 3"><button (click)="takePint(3)" id="overwrite">POUR PITCHER</button></span>
        <span *ngIf="keg.pints < 3 && keg.pints > 0"><img src="././resources/images/skull.jpg" id="skull"></span>
        <span *ngIf="keg.pints === 0"><img id ="soccer-kablooie" src="././resources/images/kablooie.jpg"></span>
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
  takePint(numberOfPints: number) {
    this.keg.pints -= numberOfPints;
    if(this.keg.pints === 0) {
      this.keg.empty = true;
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
