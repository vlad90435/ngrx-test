import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddFormComponent } from "./task-add-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [TaskAddFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
  ],
  exports: [
      TaskAddFormComponent,
  ]
})
export class TaskAddFormModule { }
