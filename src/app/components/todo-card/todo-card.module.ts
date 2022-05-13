import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { TodoCardComponent } from "./todo-card.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";



@NgModule({
  declarations: [TodoCardComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatIconModule,
		MatRippleModule
	],
  exports: [
      TodoCardComponent,
  ]
})
export class TodoCardModule { }
