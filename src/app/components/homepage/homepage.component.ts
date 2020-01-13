import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private currentWeather : WeatherService) { }
  weather = {};
  ngOnInit() {
    this.weather = this.currentWeather.getCurrentWeather().subscribe(data => this.weather = data);
    console.log(this.weather)
  }

}
