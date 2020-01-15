import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-search-by-reigon',
  templateUrl: './search-by-reigon.component.html',
  styleUrls: ['./search-by-reigon.component.css']
})
export class SearchByReigonComponent implements OnInit {
  lng: number;
  lat: number;
  regions = {};
  name: string = "";

  constructor(private currentWeather : WeatherService) { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
          this.regions = this.currentWeather.getCloseRegions(this.lat , this.lng).subscribe(data => this.regions = data);
        });
      }
  }

  changeRout() {
    this.currentWeather.setRout(false)
  }

}