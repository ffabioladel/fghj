import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';
import { AgendarComponent } from './agendar/agendar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MapaComponent } from './mapa/mapa.component';
import { VisionComponent } from './vision/vision.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MisionComponent } from './mision/mision.component';
import { MapeandoComponent } from './mapeando/mapeando.component';
import { DomseguroPipe } from './domseguro.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    AgendarComponent,
    NosotrosComponent,
    MapaComponent,
    VisionComponent,
    GaleriaComponent,
    MisionComponent,
    MapeandoComponent,
    DomseguroPipe
  ],
  
  imports: [
    NgxMasonryModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: 'agendar', component: AgendarComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'vision', component: VisionComponent},
      {path: 'galeria', component: GaleriaComponent},
      {path: 'mision', component: MisionComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
