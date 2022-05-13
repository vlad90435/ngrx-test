import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { MainActions } from "../../store/main/main.actions";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store$: Store) { }
  
  ngOnInit(): void {
    this.store$.dispatch(MainActions.loadTodos());
  }
  public getTodos(): void{
    this.store$.dispatch(MainActions.loadTodos());
  }
  public restoreState(): void{
    this.store$.dispatch(MainActions.restoreAllState());
  }

}
