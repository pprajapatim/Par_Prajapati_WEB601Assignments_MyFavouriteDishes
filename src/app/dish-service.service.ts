import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { contents } from './helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class DishServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http: HttpClient , private MessageService: MessageService) { }

  getDishes(): Observable<Content[]>
  {
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/dishes");
  }

  addDish(newDish: Content): Observable<Content>{
    this.MessageService.add(`New Dish added`);
    return this.http.post<Content>("/api/dishes", newDish, this.httpOptions);
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