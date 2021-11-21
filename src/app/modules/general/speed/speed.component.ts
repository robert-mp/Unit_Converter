import { Component, OnInit } from '@angular/core';
import { UnitConversionService } from 'src/app/services/unit-conversion.service';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {

  unit1 : string = "Input as Kilometer Per Hour";
  unit2: string = "Output as Meter Per Second";
  unit1Val: string = "";
  unit2Val: string = "";
  convertableUnits: string ="kmphToMps";
  constructor(
    public unitConversionService : UnitConversionService
  ) { }

  ngOnInit(): void {
  }

  changeUnits() {
    switch(this.convertableUnits) {
      case 'kmphToMps' :
        this.unit1 = "Input as Kilometer Per Hour";
        this.unit2 = "Output as Meter Per Second";
        break;
      case 'kmphToKnots' :
        this.unit1 = "Input as Kilometer Per Hour";
        this.unit2 = "Output as Knots";
        break;
    }
    this.unit2Val =  "";
  }

  inputValue() {
    const value = this.unitConversionService.convertUnits(this.unit1Val, this.convertableUnits);
    this.unit2Val = (Math.round((value + Number.EPSILON) * 1000000) / 1000000).toString();
  }

}
