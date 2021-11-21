import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DistanceComponent } from './modules/general/distance/distance.component';
import { VolumeComponent } from './modules/general/volume/volume.component';
import { SpeedComponent } from './modules/general/speed/speed.component';
import { UnitConversionService } from './services/unit-conversion.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DistanceComponent,
    VolumeComponent,
    SpeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UnitConversionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
