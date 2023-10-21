import { Task } from './../models/task';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { MyDialogComponent } from './my-dialog/my-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  constructor (public dialog: MatDialog){}
  //lista de tarefas
  tarefas: Task[]=[
    new Task(
      {
        name: "Comprar Pao",
        descricao:"Comprar Pao frances, amanha cedo"
      }
    )
  ];
  //metodo para abriar o dialog
    openDialog():void {
    const diaLogRef =  this.dialog.open(MyDialogComponent);
    diaLogRef.afterClosed().subscribe(res =>{
      if(res){
        this.tarefas.push(res)
      }

    })
    }

  }
