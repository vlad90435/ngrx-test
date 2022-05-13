import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInfoComponent } from "./task-info.component";



@NgModule({
  declarations: [TaskInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
      TaskInfoComponent
  ]
})
export class TaskInfoModule { }
