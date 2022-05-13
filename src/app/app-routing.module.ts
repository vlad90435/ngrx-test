import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartAppComponent } from "./pages/start-app/start-app.component";

const routes: Routes = [
  {
    path: '',
    component: StartAppComponent
    
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module')
        .then(m => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
