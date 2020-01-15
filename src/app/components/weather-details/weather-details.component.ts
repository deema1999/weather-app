import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  in: number;
  sub: any;
  lng: number;
  lat: number;
  forecast = {};

  constructor(private route: ActivatedRoute,private weather: WeatherService) { }

  ngOnInit() { 
    
    this.sub = this.route.params.subscribe(params => {
      this.in = params['index'];
    });
    
    if(this.weather.getRout() == true) {
      if (navigator) {
            navigator.geolocation.getCurrentPosition( pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
                this.forecast = this.weather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
            });
      }
    }  
     else { 
      this.sub = this.route.params.subscribe(params => {
        this.lng = params['long'];
        this.lat = params['latt'];
        this.forecast = this.weather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
      });
     }
  }

}
