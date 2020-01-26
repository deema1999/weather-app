import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-search-by-reigon',
  templateUrl: './search-by-reigon.component.html',
  styleUrls: ['./search-by-reigon.component.css']
})
export class SearchByReigonComponent implements OnInit {
  
  lng: number;
  lat: number;
  name: string = "";
  count: number = 50;
  public regions = {};
  position: number;

  constructor(private currentWeather : WeatherService) { }
  
  @ViewChild('search',{static :false}) search: ElementRef;

  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    
    let scrollPosition = Math.round(window.pageYOffset)
    if (scrollPosition > this.position){
      document.querySelector('header').classList.add('sticky');
    }
    else {
      document.querySelector('header').classList.remove('sticky');
    }
  }

  ngAfterViewInit() {
    this.position  = this.search.nativeElement.offsetTop;
  }

  ngOnInit() {

    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
          this.regions = this.currentWeather.getCloseRegions(this.lat , this.lng , this.count).subscribe(data => this.regions = data);
        });
      } 
      
    
  }
   

  changeRout() {
    this.currentWeather.setRout(false)
  }
 

}
