import { Hero } from './../models/hero';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abilitie } from '../models/abilitie';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(environment.apiUrl + '/heroes');
  }

  getAbilities(): Observable<Abilitie[]> {
    return this.httpClient.get<Abilitie[]>(environment.apiUrl + '/abilities');
  }

  addHero(): Observable<Hero> {
    const hero: Hero = {
      "id": 5,
      "name": "ChrisLU"
    }
    return this.httpClient.post<Hero>(environment.apiUrl + '/heroes', hero)
  }

}
