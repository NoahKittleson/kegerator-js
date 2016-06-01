import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <p>{{ keg.name }} {{ keg.type }} {{ keg.ABV }}</p>
  `
})
export class KegDisplayComponent {
  public keg: Keg;

}
