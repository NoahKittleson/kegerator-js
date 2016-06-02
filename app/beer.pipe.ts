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
    else if(desiredBeerType === "hoppy") {
      return input.filter((keg) => {
        return keg.type === "IPA"
            || keg.type === "Pale Ale";
      });
    }
    else if(desiredBeerType === "light") {
      return input.filter((keg) => {
        return keg.type === "Heffeweizen"
            || keg.type === "Pilsner"
            || keg.type === "Wheat";
      });
    }
    else if(desiredBeerType === "shit") {
      return input.filter((keg) => {
        return keg.name === "Pabst"
            || keg.name === "Rainier";
      });
    }
    return input.filter((keg) => {
      return keg.type === desiredBeerType;
    });
  }
}
