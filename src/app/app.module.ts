import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { SearchByReigonComponent } from './components/search-by-reigon/search-by-reigon.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { DecimalPipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WeatherDetailsComponent,
    SearchByReigonComponent,
    SearchPipe,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1vLI61mSRa9ETMH22uSKAYwqMRbB4HGY'
    })
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
