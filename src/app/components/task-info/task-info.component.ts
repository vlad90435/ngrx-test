import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";
import { ICardModel } from "../../models/card-model";
import { Store } from "@ngrx/store";
import { MainSelectors } from "../../store/main/main.selectors";


@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit, OnDestroy {
  
  @Input() public cards$: Observable<ICardModel[]>;
  public tasks: ICardModel[];
  public data: Subject<boolean>;
  public destroy$= new Subject<boolean>();
  public completed: Observable<number>;
  public uncompleted: Observable<number>;
  
  constructor(private store$: Store) { }
  
  
  ngOnInit(): void {
    this.cards$.pipe(
        takeUntil(this.destroy$)
    ).subscribe((data) => this.tasks = data)
    
    this.completed = this.store$.select(MainSelectors.selectCompleted)
    this.uncompleted = this.store$.select(MainSelectors.selectUncompleted)
  }
  
  
  ngOnDestroy (): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    
  }
  
}
