import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  
  @Input() public in;
  weatherd = {};
  sub: any;
  lng: number;
  lat: number;
  forecastd = {};

  constructor(private route: ActivatedRoute,private weather: WeatherService) { }

  ngOnInit() {
    if (navigator) {
          navigator.geolocation.getCurrentPosition( pos => {
              this.lng = +pos.coords.longitude;
              this.lat = +pos.coords.latitude;//console.log(this.lng); 
              this.weatherd = this.weather.getCurrentWeather(this.lat , this.lng).subscribe(data => this.weatherd = data);
              this.forecastd = this.weather.getForcast(this.lat , this.lng).subscribe(data => this.forecastd = data);
            });
          }
      this.sub = this.route.params.subscribe(params => {
      this.in = params['index'];console.log(this.in);
    });
  }

}
