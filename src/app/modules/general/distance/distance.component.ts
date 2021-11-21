import { Component, OnInit } from '@angular/core';
import { UnitConversionService } from '../../../services/unit-conversion.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  unit1 : string = "Input as Kilometer";
  unit2: string = "Output as Miles";
  unit1Val: string = "";
  unit2Val: string = "";
  convertableUnits: string ="kmToMiles";
  constructor(
    public unitConversionService : UnitConversionService
  ) { }

  ngOnInit(): void {
  }

  changeUnits() {
    switch(this.convertableUnits) {
      case 'kmToMiles' :
        this.unit1 = "Input as Kilometer";
        this.unit2 = "Output as Miles";
        break;
      case 'footToMeter' :
        this.unit1 = "Input as Foot";
        this.unit2 = "Output as Meter";
        break;
    }
    this.unit2Val =  "";
  }

  inputValue() {
    const value = this.unitConversionService.convertUnits(this.unit1Val, this.convertableUnits);
    this.unit2Val = (Math.round((value + Number.EPSILON) * 1000000) / 1000000).toString();
  }

}
