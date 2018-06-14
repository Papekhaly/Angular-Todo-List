import { Injectable } from '@angular/core';
import { Todolist } from '../classes/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private todos: Todolist[];
  private textUpdate: string;
  private nextId: number;

  constructor() { 
    this.todos = [
      new Todolist(0,"Task 1"),
      new Todolist(1, "task 2"),
      new Todolist(2, "task 3"),
    ];

    this.nextId = 3;
  }

  public addtask(text: string): void {
    console.log(this.todos);
    let todolist = new Todolist(this.nextId, text);
    this.todos.push(todolist);
    this.nextId++;

  }

  public showTodos(): Todolist[] {
    return this.todos;
  }

  public onEdit(text: string): void {
    this.textUpdate = text;
  } 

  public removeTodos(id: number): void {
    this.todos = this.todos.filter((Todolist) => Todolist.id != id);
  }
}
