import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public task: string;

  constructor(private todolistService: TodolistService) {
    this.task = '';
   }

  ngOnInit() {
  }
  
  private addtask(): void {
    this.todolistService.addtask(this.task);
    this.task = '';
  }
}
