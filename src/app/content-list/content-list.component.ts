import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  contents: Content[] = [
    { 
      id: 1, 
      title: 'Dabeli', 
      description: 'It is Indian snack.', 
      creator: 'Indian', 
      image: '',
      // image: 'https://cookingfromheart.com/wp-content/uploads/2017/06/Kutchi-Dabeli-8.jpg', 
      type: 'Snack', 
      tags: ['IndianSnack', 'JunkFood'] 
    },
    { 
      id: 2, 
      title: 'Dosa', 
      description: 'It is South Indian food.', 
      creator: 'South Indian', 
      image: 'https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg', 
      tags: ['SouthIndianMeal', 'DeliciousMeal'] 
    },
    { 
      id: 3, 
      title: 'Pizza', 
      description: 'It is a Italian food.', 
      creator: 'Italian', 
      image: 'https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg', 
      type: 'Meal', 
      tags: ['Pizza', 'FavouriteFood'] 
    },
    { 
      id: 4, 
      title: 'Dalbati', 
      description: 'Daal Baati is an Indian dish of daal and baati. It is popular in Madhya Pradesh, Rajasthan, Maharashtra’s Khandesh', 
      creator: 'Rajasthani', 
      image: 'https://imagevars.gulfnews.com/2022/03/17/Dal-Bati-_17f984e609f_large.jpg',
      type: 'Meal', 
      tags: ['RajasthaniMeal', 'DeliciousMeal'] 
    },
    { 
      id: 5, 
      title: 'Pasta', 
      description: 'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.', 
      creator: 'Italian', 
      image: 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg', 
      type: 'Meal', 
      tags: ['ItalianMeal', 'DeliciousMeal'] 
    },
    { 
      id: 6, 
      title: 'Chinese Noodles', 
      description: 'Chinese noodles vary widely according to the region of production, ingredients, shape or width, and manner of preparation. Noodles were invented in China, and are an essential ingredient and staple in Chinese cuisine.', 
      creator: 'China', 
      image: 'https://www.chewoutloud.com/wp-content/uploads/2021/05/lo-mein-square.jpg', 
      type: 'Snack', 
      tags: ['ChinesenMeal', 'JunkFood'] 
    },
    { 
      id: 7, 
      title: 'Manchurian', 
      description: 'Manchurian is a class of Indian Chinese dish made by roughly chopping and deep-frying ingredients such as chicken, cauliflower, prawns, fish, mutton, and paneer, and then sautéeing them in a sauce flavored with soy sauce.', 
      creator: 'China', 
      image: 'https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7.jpg', 
      tags: ['ChinesenMeal', 'JunkFood'] 
    }
  ];

  searchTitle: string = '';
  searchMessage: string = '';
  titleExists: boolean = false;

  searchContent() {
    const exists = this.contents.some(
      (content) => content.title.toLowerCase() === this.searchTitle.toLowerCase()
    );

    this.titleExists = exists;
    this.searchMessage = exists
      ? `Content with title '${this.searchTitle}' exists.`
      : `Content with title '${this.searchTitle}' does not exist.`;
  }

  displayContentDetails(content: any) {
    console.log('Content ID:', content.id);
    console.log('Content Title:', content.title);
  }

  addContent(newContent: Content) {
    this.contents.push(newContent);
    this.contents = [...this.contents]; 
  }

}