import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { DistanceComponent } from './modules/general/distance/distance.component';
import { VolumeComponent } from './modules/general/volume/volume.component';
import { SpeedComponent } from './modules/general/speed/speed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'distance', component: DistanceComponent },
  { path: 'volume', component: VolumeComponent },
  { path: 'speed', component: SpeedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
