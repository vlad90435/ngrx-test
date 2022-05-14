import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { TodoCardModule } from "../../components/todo-card/todo-card.module";
import { TodoListModule } from "../../components/todo-list/todo-list.module";
import { TodoListComponent } from "../../components/todo-list/todo-list.component";
import { MatButtonModule } from "@angular/material/button";
import { AppModule } from "../../app.module";
import { TaskInfoModule } from "../../components/task-info/task-info.module";
import { TaskAddFormModule } from "../../components/task-add-form/task-add-form.module";



@NgModule({
	imports: [
		CommonModule,
		MainRoutingModule,
		TodoCardModule,
		TodoListModule,
		MatButtonModule,
		TaskInfoModule,
		TaskAddFormModule,
	
	],
  declarations: [MainComponent, TodoListComponent],
  
})
export class MainModule { }
