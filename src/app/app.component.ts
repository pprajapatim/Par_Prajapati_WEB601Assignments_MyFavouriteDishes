import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { DishServiceService } from './dish-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<app-content-card></app-content-card>',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Par_Prajapati_MyFavouriteDishes';

  dishId: number = 8;
  oneDishById: any = {};

  constructor(private DishServiceService: DishServiceService){}

  ngOnInit(){
    this.findDishById();
  }

  findDishById(){
    this.DishServiceService.getDishById(this.dishId).subscribe(result => {
      if (typeof result === "object"){
        this.oneDishById = result;
      }
    });
  }
}
