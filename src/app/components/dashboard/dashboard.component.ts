import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imgUrl = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad = '';
  loading = false;
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.loading = true;
    this.query = false;
    this._climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);
      this.query = true;
      this.loading = false;
      this.temperatura = data.main.temp - 273;
      this.clima = data.weather[0].main;
      this.humedad = data.main.humidity
    }, error => {
      console.log(error)
      this.loading = false;
      this.query = false;
    });
  }


} 
