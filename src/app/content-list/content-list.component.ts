import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contents: any[] = [
    { id: 1, title: 'Dabeli', description: 'It is Indian snack.', creator: 'Indian', image: 'https://cookingfromheart.com/wp-content/uploads/2017/06/Kutchi-Dabeli-8.jpg', type: 'Snack', tags: ['IndianSnack', 'JunkFood'] },
    { id: 2, title: 'Dosa', description: 'It is South Indian food.', creator: 'South Indian', image: 'https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg', type: 'Meal', tags: ['SouthIndianMeal', 'DeliciousMeal'] },
    { id: 3, title: 'Pizza', description: 'It is a Italian food.', creator: 'Italian', image: 'https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg', type: 'Italian Meal', tags: ['Pizza', 'FavouriteFood'] }
  ];

  displayContentDetails(content: any) {
    console.log('Content ID:', content.id);
    console.log('Content Title:', content.title);
  }

}