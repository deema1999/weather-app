import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
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
  weather = {};
  forecast = {};

  constructor(private route: ActivatedRoute,private currentWeather : WeatherService) { }

  ngOnInit() { 

    document.body.className = "selector";

    if(this.currentWeather.getRout() == true) {
      if (navigator) {
        navigator.geolocation.getCurrentPosition( pos => {
            this.lng = +pos.coords.longitude;
            this.lat = +pos.coords.latitude;
            this.forecast = this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
          });
    }
  }
  else {
         this.sub = this.route.params.subscribe(params => {
          this.lng = params['long'];
          this.lat = params['latt'];
          this.forecast = this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
        });
    } 
    
  }

  ngOnDestroy(){
    document.body.className="";
  }
  
}
