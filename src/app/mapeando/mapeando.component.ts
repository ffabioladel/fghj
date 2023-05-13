import { Component } from '@angular/core';
import { Map, tileLayer} from 'leaflet';
@Component({
  selector: 'app-mapeando',
  templateUrl: './mapeando.component.html',
  styleUrls: ['./mapeando.component.css']
})
export class MapeandoComponent {

  ngAfterViewInit(): void
  {
    const map = new Map('map').setView([51.505, -0.09], 13);
  

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  } 
}
