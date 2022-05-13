import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { StartAppComponent } from "./start-app.component";


const routes: Routes = [
  {
    path: '',
    component: StartAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartAppRoutingModule { }
