import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() public datee;
  @Input() public id;
  weatherd = {};
  sub: any;

  constructor(private route: ActivatedRoute,private weather: WeatherService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.datee = params['date'];
      this.id = params['id'];
      
      //console.log(this.lon)
      this.weatherd = this.weather.getForcastById(this.id).subscribe(data => this.weatherd = data);
      });
  }


}
