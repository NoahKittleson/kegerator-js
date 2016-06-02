export class Keg {
  public empty: boolean = false;
  public pints: number = 4;
  constructor(public name: string, public type: string, public ABV: string, public id: number) {

  }
}
