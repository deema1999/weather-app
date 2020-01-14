import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { SearchByReigonComponent } from './components/search-by-reigon/search-by-reigon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WeatherDetailsComponent,
    SearchByReigonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1vLI61mSRa9ETMH22uSKAYwqMRbB4HGY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
