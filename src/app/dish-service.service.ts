import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { contents } from './helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})

export class DishServiceService {

  constructor() { }

  getDishes(): Observable<Content[]>
  {
    const dishes = contents;
    return of(dishes);
  }

  getDishById(id: number): Observable<any> {
    const dish = contents.find(content => content.id === id);

    if (dish) {
      return of(dish);
    }
    return of("Invalid Id");
  }
}