import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = '7fd707ea280cf6ebe410484020d73198';
  url = 'https://api.openweathermap.org/data/2.5/weather?appid=';

  constructor(private httpClient: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const httpUrl = this.url + this.key + '&q=' + ciudad;
    return this.httpClient.get(httpUrl, {
      observe: 'body'
    });
  }
}
