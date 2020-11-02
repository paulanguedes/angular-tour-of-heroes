import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Alisha', img: './assets/img/Alisha.png' },
      { id: 12, name: 'Lyja', img: './assets/img/Lyja.png' },
      { id: 13, name: 'Bella Donna', img: './assets/img/BellaDonna.png' },
      { id: 14, name: 'Kelly', img: './assets/img/Kelly.png' },
      { id: 15, name: 'Chastity', img: './assets/img/Chastity.png' },
      { id: 16, name: 'Jess', img: './assets/img/Jess.png' },
      { id: 17, name: 'Doll Girl', img: './assets/img/DollGirl.png' },
      { id: 18, name: 'Huntress', img: './assets/img/Huntress.png' },
      { id: 19, name: 'Firestar', img: './assets/img/Firestar.png' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
