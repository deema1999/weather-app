import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { SearchByReigonComponent } from './components/search-by-reigon/search-by-reigon.component';


const routes: Routes = [
  { path:'', component:HomepageComponent },
  { path:'homepage/:long/:latt', component:HomepageComponent },
  { path:'weatherdetails/:index', component:WeatherDetailsComponent },
  { path:'search', component:SearchByReigonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
