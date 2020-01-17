import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  rout : boolean = true; 
  
  constructor(private http: HttpClient) { }

  getForcast(lat : number , lng : number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}forecast?lat=${lat}&lon=${lng}&${environment.appId}`);
  }

  getCloseRegions(lat : number , lng : number , count: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}find?lat=${lat}&lon=${lng}&${count}&${environment.appId}`)
  }

  getRout() {
    return this.rout;
  }

  setRout(value : boolean) {
    this.rout = value;
  }
  
}
