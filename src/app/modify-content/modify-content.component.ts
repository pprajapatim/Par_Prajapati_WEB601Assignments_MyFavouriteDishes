import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

import { MatDialog } from '@angular/material/dialog';
import { MessageService } from '../message.service';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  newDish: any = {};
  @Output() addDishEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService){}

  openDialog(){
    const dialogRef = this.dialog.open(AddContentDialogComponent,{
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newDishFromDialog => {
      if(newDishFromDialog){
        if(newDishFromDialog.title && newDishFromDialog.description && newDishFromDialog.creator){
          this.newDish = newDishFromDialog;
          this.addNewDish();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }

  addNewDish(){
    this.addDishEvent.emit(this.newDish);
    this.newDish = {};
  }
}