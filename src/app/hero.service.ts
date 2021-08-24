import { Injectable } from '@angular/core';
// Interface
import { Hero } from './hero';
// Data
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
// Inject message service
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
