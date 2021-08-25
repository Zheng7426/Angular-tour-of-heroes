import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Who'},
      { id: 12, name: 'Mr Robot'},
      { id: 13, name: 'Luffy'},
      { id: 14, name: 'Usopp'},
      { id: 15, name: 'Spiderman'},
      { id: 16, name: 'Storm'},
      { id: 17, name: 'Wolverine'},
      { id: 18, name: 'Ironman'},
      { id: 19, name: 'Captain Marvel'},
      { id: 20, name: 'Hungry Wolf'}
    ];
    return {heroes};
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
