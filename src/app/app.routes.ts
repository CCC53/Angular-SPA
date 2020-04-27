import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {PersonajesComponent} from './components/personajes/personajes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorHeroesComponent } from './components/buscadorheroes/buscadorheroes.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscar/:termino', component: BuscadorHeroesComponent},
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {routes}
