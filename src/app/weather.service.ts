import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { IWeather } from './weather-info'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  _url = "https://api.openweathermap.org/data/2.5/weather?q=Hebron&APPID=0a028a3d617067745e582919044c7f1b";

  getCurrentWeather(): Observable<IWeather[]> {
      return this.http.get<IWeather[]>(this._url);
  }
  
}
