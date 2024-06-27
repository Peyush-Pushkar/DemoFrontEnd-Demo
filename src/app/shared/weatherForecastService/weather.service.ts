import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import {WeatherDetail } from '../models/weather-detail.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string =environment.apiBaseUrl +'/WeatherForecast'
  constructor(private http: HttpClient) { }

  header = new HttpHeaders({
    'Content-Type': 'application/json',
  });


  getEntries(): Observable<WeatherDetail[]> {
    return this.http.get(this.url, { headers: this.header }).pipe(
      map((response) => {
        return response as WeatherDetail[];
      })
    );
  }
}
