import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { ActivatedRoute } from '@angular/router';


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
  date: any;
  @Input() public long;
  @Input() public latt;
  sub: any;

  constructor(private route: ActivatedRoute,private currentWeather : WeatherService) { }

  ngOnInit() { 
    if(this.currentWeather.getRout() == true) {
      if (navigator) {
        navigator.geolocation.getCurrentPosition( pos => {
            this.lng = +pos.coords.longitude;
            this.lat = +pos.coords.latitude;//console.log(this.lng); 
            this.weather = this.currentWeather.getCurrentWeather(this.lat , this.lng).subscribe(data => this.weather = data);
            this.forecast = this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
          });
    }
  }
  else {
         this.sub = this.route.params.subscribe(params => {
          this.long = params['long'];
          this.latt = params['latt'];
          this.lng = this.long;
          this.lat = this.latt; 
          this.weather = this.currentWeather.getCurrentWeather(this.lat , this.lng).subscribe(data => this.weather = data);
          this.forecast = this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => this.forecast = data);
            
          
        });
    }
      
     
    
  }
  
}
