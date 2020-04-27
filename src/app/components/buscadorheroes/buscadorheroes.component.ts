import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-buscadorheroes',
  templateUrl: './buscadorheroes.component.html',
})
export class BuscadorHeroesComponent implements OnInit {
  
  heroes:any[] = [];
  termino:string;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    });
  }
}
