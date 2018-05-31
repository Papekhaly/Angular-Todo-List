import { Component, OnInit, Input} from '@angular/core';
import { Todolist } from '../classes/todolist';
import { TodolistService } from '../services/todolist.service'; 

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  private todolist: Todolist;

  constructor(private todolistService: TodolistService) { }

  ngOnInit() {
  }

  private removeTodos(): void {
    this.todolistService.removeTodos(this.todolist.id);
  }

}
