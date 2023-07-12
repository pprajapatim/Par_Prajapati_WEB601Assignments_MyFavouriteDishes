import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { contents } from './helper-files/contentDb';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class DishServiceService {

  constructor(private MessageService: MessageService) { }

  getDishes(): Observable<Content[]>
  {
    const dishes = contents;
    this.MessageService.add("Content array loaded!");
    return of(dishes);
  }

  getDishById(id: number): Observable<any> {
    const dish = contents.find(content => content.id === id);

    if (dish) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(dish);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}