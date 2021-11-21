import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitConversionService {

  constructor() { }

  convertUnits(value, unit) {
    switch(unit) {
      case 'kmToMiles' :
        return value*0.621371;
      case 'footToMeter' :
        return value*0.3048;
      case 'kmphToMps' :
        return value*0.277778;
      case 'kmphToKnots':
        return value*0.539957;
      case 'ouncesToLitres' :
        return value*0.0295735;
      case 'gallonsToLiters':
        return value*3.78541;
    }
  }
}
