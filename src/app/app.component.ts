

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigateToAgendar() {
    window.location.href = '/agendar';
  }
  searchTerm: string = '';

  onSearch(): void {
    // Implementa la lógica de búsqueda aquí
    if (this.searchTerm) {
      // Realiza la búsqueda utilizando el valor de this.searchTerm
      console.log('Realizando búsqueda de fechas: ', this.searchTerm);
    }
  }

  servicios: string[] = [
    'gimnasio',
    'buffet',
    'alberca',
    'salon de eventos sociales',
    'actividades al aire libre',
  ]

}

