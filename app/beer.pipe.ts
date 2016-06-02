import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "beerType",
  pure: false
})

export class BeerPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredBeerType = args[0];
    if (desiredBeerType === "all") {
      return input;
    }
    if (desiredBeerType === "dark") {
      return input.filter((keg) => {
        return keg.type === "Stout"
            || keg.type === "Porter"
            || keg.type === "Brown";
      });
    }
    return input.filter((keg) => {
      return keg.type === desiredBeerType;
    });
  }
}
