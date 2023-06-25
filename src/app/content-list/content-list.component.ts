import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { DishServiceService } from '../dish-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
    
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultSong: string = '/assets/images/FavouriteDish.jpg';

  constructor(private DishServiceService: DishServiceService) {

  }

  ngOnInit() {
    this.DishServiceService.getDishes().subscribe(dishes => this.contents = dishes );
  }

  searchByTitle() {
    const matchingDish = this.contents.find(dish => dish.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);
    if(matchingDish){
      this.titleFound = true;
      cardElements.forEach(card => {
        if(parseInt(card.id) === matchingDish.id){
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }
}