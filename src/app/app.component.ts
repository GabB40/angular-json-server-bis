import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { Hero } from './models/hero';
import { Abilitie } from './models/abilitie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  heroes!: Hero[];

  abilities$!: Observable<Abilitie[]>;
  abilities!: Abilitie[];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.heroes$ = this.service.getHeroes();
    this.heroes$.subscribe(heroes => console.log(heroes));

    this.abilities$ = this.service.getAbilities();
    this.abilities$.subscribe(abilities => console.log(abilities));
    
  }
}
