import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    this.contentList.add({
      id: 1,
      title: "Dabeli",
      description: "It is Indian snack",
      creator: "Indian",
      imgURL: "https://cookingfromheart.com/wp-content/uploads/2017/06/Kutchi-Dabeli-8.jpg",
      type: "Snack"
    });
    this.contentList.add({
      id: 2,
      title: "Dosa",
      description: "It is South Indian food",
      creator: "South Indian",
      imgURL: "https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg",
      type: "Meal"
    });
    this.contentList.add({
      id: 3,
      title: "Pizza",
      description: "It is a Italian food",
      creator: "Italian people",
      imgURL: "https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg",
      type: "Italian"
    });
  }
}