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

  constructor(private DishServiceService: DishServiceService){}

  ngOnInit(){}
}
