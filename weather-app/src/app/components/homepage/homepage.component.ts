import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  lng: number;
  lat: number;
  sub: any;
  numberPipe :string;
  public forecast;
  public weather = {};
  public list =[];
  constructor(private route: ActivatedRoute,private currentWeather : WeatherService,private decimalPipe: DecimalPipe) { }



  
  getWeatherData(lng , lat) {

      this.weather["forecastList"] = this.forecast.list;
      this.weather["cityName"] = this.forecast.city.name;
      for(let i = 0 ; i<this.forecast.list.length ; i++){

          this.weather["maxTemp"] =  this.decimalPipe.transform(this.getTempFormate(this.forecast.list[i].main.temp_max));
          this.weather["minTemp"] = this.decimalPipe.transform(this.getTempFormate(this.forecast.list[i].main.temp_min));
          this.weather["description"] = this.forecast.list[i].weather[0].description;
          this.weather["icon"] = this.forecast.list[i].weather[0].icon;
          console.log(this.weather)
    }
  }
  getTempFormate(temp) {
    return this.decimalPipe.transform(temp - 273.15 , '1.0-0')
  }
  ngOnInit() { 

    if(this.currentWeather.getRout() == true) {
      if (navigator) {
        navigator.geolocation.getCurrentPosition( pos => {
            this.lng = +pos.coords.longitude;
            this.lat = +pos.coords.latitude;
            this.currentWeather.getForcast(this.lat , this.lng).subscribe(data => {
              this.forecast = data,
              this.getWeatherData(this.lng,this.lat)
          
           }
             
              );
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
