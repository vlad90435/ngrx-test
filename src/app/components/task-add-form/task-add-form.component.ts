import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription} from "rxjs";
import { Store } from "@ngrx/store";
import { MainSelectors } from "../../store/main/main.selectors";
import { MainActions } from "../../store/main/main.actions";

export enum MyForm{
  TITLE = 'title',
  IS_COMPLETED = 'isCompleted',
}

@Component({
  selector: 'app-task-add-form',
  templateUrl: './task-add-form.component.html',
  styleUrls: ['./task-add-form.component.scss']
})

export class TaskAddFormComponent implements OnInit,OnDestroy {

  constructor(private fb: FormBuilder, private store$: Store) { }
  public title = MyForm.TITLE;
  public isCompleted = MyForm.IS_COMPLETED;
  public lastId: number;
  public lastUserId: number;
  public lastIdSub: Subscription;
  public lastUserIdSub: Subscription;
  
  public myForm: FormGroup = this.fb.group({
    [MyForm.TITLE]: new FormControl('',[Validators.required,Validators.minLength(2)]),
    [MyForm.IS_COMPLETED]: new FormControl(null,[Validators.required]),
  })
  ngOnInit(): void {
    this.lastIdSub = this.store$.select(MainSelectors.selectLastId).pipe(
    ).subscribe( (data) => {
      this.lastId = data
      console.log('lastId' , this.lastId)
    })
  
    this.lastUserIdSub = this.store$.select(MainSelectors.selectLastUserId).pipe(
    ).subscribe( (data) => {
      this.lastUserId = data
      console.log('lasUserId' , this.lastUserId)
    })
    this.myForm.valueChanges.subscribe(() => console.log(this.myForm))
  }
  
  public onSubmit () {
    //show loader dispatch action imit//
    alert('show loader POST request imit')
    this.store$.dispatch(MainActions.addTodo({
      todo:{
        id: this.lastId + 1,
        userId: this.lastUserId + 1,
        title: this.myForm.controls[MyForm.TITLE].value,
        completed: this.myForm.controls[MyForm.IS_COMPLETED].value
      }
    }))
    alert('hide loader imit')
    //hide loader dispatch action imit//
  }
  ngOnDestroy () {
    this.lastIdSub.unsubscribe()
    this.lastUserIdSub.unsubscribe()
  }
}
