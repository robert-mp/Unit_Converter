import { Component, OnInit } from '@angular/core';
import { UnitConversionService } from 'src/app/services/unit-conversion.service';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {

  unit1 : string = "Input as Ounces";
  unit2: string = "Output as Litres";
  unit1Val: string = "";
  unit2Val: string = "";
  convertableUnits: string ="ouncesToLitres";
  constructor(
    public unitConversionService : UnitConversionService
  ) { }

  ngOnInit(): void {
  }

  changeUnits() {
    switch(this.convertableUnits) {
      case 'ouncesToLitres' :
        this.unit1 = "Input as Ounces";
        this.unit2 = "Output as Litres";
        break;
      case 'gallonsToLiters' :
        this.unit1 = "Input as Gallons";
        this.unit2 = "Output as Litres";
        break;
    }
    this.unit2Val =  "";
  }

  inputValue() {
    const value = this.unitConversionService.convertUnits(this.unit1Val, this.convertableUnits);
    this.unit2Val = (Math.round((value + Number.EPSILON) * 1000000) / 1000000).toString();
  }

}
