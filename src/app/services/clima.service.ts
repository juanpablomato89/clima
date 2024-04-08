import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = 'c80258f786fa6adcb91d2888be17a0ff';
  url = 'https://api.openweathermap.org/data/2.5/weather?appid=';

  constructor(private httpClient: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const httpUrl = this.url + this.key + '&q=' + ciudad;
    return this.httpClient.get(this.url);
  }
}
