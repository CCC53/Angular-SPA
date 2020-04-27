//Importaciones de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRouting } from './app.routes';

//Servicios
import { HeroesService } from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorHeroesComponent } from './components/buscadorheroes/buscadorheroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonajesComponent,
    HeroeComponent,
    BuscadorHeroesComponent,
    HeroeTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
