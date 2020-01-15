import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';


const routes: Routes = [
  { path:'', component:HomepageComponent },
  { path:'weatherdetails/:date/:id', component:WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
