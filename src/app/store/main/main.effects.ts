import { Store } from "@ngrx/store";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of, tap} from 'rxjs';
import { HttpTodosService } from "../../services/http-todos.service";
import {catchError, map, switchMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { MainActions } from "./main.actions";


@Injectable()
export class MainEffects {
	
	public load$ = createEffect( () => this.actions$.pipe(
		ofType( MainActions.loadTodos ),
		switchMap( () => this.httpTodos.getTodos().pipe(
			map( response => MainActions.loadSuccess( {response} ) ),
			catchError( error => of( MainActions.loadFailure( {error} ) ) ),
		) ),
	) );
	public loadSuccess$ = createEffect(() => this.actions$.pipe(
		ofType(MainActions.loadSuccess),
		tap(({response}) => {
			alert('on this place should be popup success')
			
		}),
	), {dispatch: false});
	
	public loadFailure$ = createEffect(() => this.actions$.pipe(
		ofType(MainActions.loadFailure),
		tap((message) => alert( message)),
	), {dispatch: false});
	
	public deleteTodo$ = createEffect( () => this.actions$.pipe(
		ofType( MainActions.deleteTodo ),
		switchMap( ({id}) => this.httpTodos.deleteTodo(id).pipe(
			map( deletedCard =>{
				let neededId = id;
				console.log(neededId)
				return MainActions.deleteTodoSuccess( {id: neededId} )
			} ),
			tap((id) => console.log(('tap rxjs'),id)),
			catchError( error => of( MainActions.deleteTodoFailure( {error} ) ) ),
		) ),
	) );
	public deleteTodoSuccess$ = createEffect( () => this.actions$.pipe(
		ofType( MainActions.deleteTodoSuccess ),
		tap(({id}) => {
			console.log('deleted id', id)
			alert('on this place should be popup success')
			//this.store$.dispatch(MainActions.loadTodos())
			alert('on this place should be popup get request after delete success')
		}),
	), {dispatch: false});
	
	constructor (private actions$: Actions,
	             private store$: Store,
	             private httpTodos: HttpTodosService) {
	}

}
