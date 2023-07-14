import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  newDish: any = {};
  @Output() addDishEvent = new EventEmitter<Content>();

  addNewDish(){
    this.addDishEvent.emit(this.newDish);
    this.newDish = {};
  }
}