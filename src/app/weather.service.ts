import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { IWeather } from './weather-info'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  rout : boolean = true;
  constructor(private http: HttpClient) { }

  /*getCurrentWeather(lat : number , lng : number): Observable<string> {
      return this.http.get<string>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=0a028a3d617067745e582919044c7f1b`);
  }*/

  getForcast(lat : number , lng : number) {
    return this.http.get<string>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&APPID=0a028a3d617067745e582919044c7f1b`);
  }

  getCloseRegions(lat : number , lng : number) {
    return this.http.get<string>(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=20&APPID=0a028a3d617067745e582919044c7f1b`)
  }

  getRout() {
    return this.rout;
  }

  setRout(value : boolean) {
    this.rout = value;
  }
  
}
