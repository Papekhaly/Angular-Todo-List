import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { TodolistService } from './services/todolist.service';
import { TodoTaskComponent } from './todo-task/todo-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    TodoTaskComponent
  ],
  imports: [
    BrowserModule
    FormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    TodolistService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
