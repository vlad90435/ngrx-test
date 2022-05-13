import { Component, Input, OnInit } from '@angular/core';
import { ICardModel } from "../../models/card-model";
import { Store } from "@ngrx/store";
import { MainActions } from "../../store/main/main.actions";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() public card: ICardModel;
  public longText: string = 'Test'
  constructor(private store$: Store) { }

  ngOnInit(): void {
  
  }
  
  public deleteRequest (): void {
    this.store$.dispatch(MainActions.deleteTodo({id:this.card.id}))
    console.log('deleted request', this.card.id)
  }
}
