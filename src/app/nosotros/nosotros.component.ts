import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  
  mostrar: boolean = false;

  servicios: string[] = [
    'gimnasio',
    'buffet',
    'alberca',
    'salon de eventos sociales',
    'actividades al aire libre',
  ]

}