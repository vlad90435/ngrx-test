import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICardModel } from "../../models/card-model";
import { Store } from "@ngrx/store";
import { MainSelectors } from "../../store/main/main.selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public cards: ICardModel[];
  public cards$: Observable<ICardModel[] | []>;
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.cards$ = this.store$.select(MainSelectors.selectCards);
  }
  ngOnDestroy (): void {
  }
  
  
}
