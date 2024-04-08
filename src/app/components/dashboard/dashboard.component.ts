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
  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    console.log(this.ciudad);

    this._climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }


} 
