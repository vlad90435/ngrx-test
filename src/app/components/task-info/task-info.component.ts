import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs";
import { ICardModel } from "../../models/card-model";
import { Store } from "@ngrx/store";
import { MainSelectors } from "../../store/main/main.selectors";


@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {
  
  public cards$: Observable<ICardModel[]>;
  public completed: Observable<number>;
  public uncompleted: Observable<number>;
  
  constructor(private store$: Store) { }
  
  
  ngOnInit(): void {
    this.cards$ = this.store$.select(MainSelectors.selectCards)
    
    this.completed = this.store$.select(MainSelectors.selectCompleted)
    this.uncompleted = this.store$.select(MainSelectors.selectUncompleted)
  }
  
  
}
