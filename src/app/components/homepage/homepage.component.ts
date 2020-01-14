import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  lng: number;
  lat: number;
  weather = {};
  forecast = {};

  constructor(private currentWeather : WeatherService) { }

  ngOnInit() { 
    
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;console.log(this.lng); 
          this.weather = this.currentWeather.getCurrentWeather(this.lat , this.lng).subscribe(data => this.weather = data);
          this.forecast = this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
        });
      }
    
    
  }

}
