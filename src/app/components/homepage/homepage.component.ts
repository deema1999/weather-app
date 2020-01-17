import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  lng: number;
  lat: number;
  sub: any;
  public forecast = {};

  constructor(private route: ActivatedRoute,private currentWeather : WeatherService) { }

  ngOnInit() { 

    if(this.currentWeather.getRout() == true) {
      if (navigator) {
        navigator.geolocation.getCurrentPosition( pos => {
            this.lng = +pos.coords.longitude;
            this.lat = +pos.coords.latitude;
            this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
          });
    }
  }
  else {
         this.sub = this.route.params.subscribe(params => {
          this.lng = params['long'];
          this.lat = params['latt'];
          this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
        });
    } 
    
  }

}
