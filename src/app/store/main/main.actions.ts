import {createAction, props} from '@ngrx/store';
import { HttpErrorResponse } from "@angular/common/http";
import { ICardListModel } from "../../models/card-list-model";
import { ICardModel } from "../../models/card-model";

export namespace MainActions {
	
	export const restoreAllState = createAction(
		'[Main] Restore All state',
	);
	export const loadTodos = createAction(
		'[Main] Load Todos',
	);
	export const loadSuccess = createAction(
		'[Main] Load Success',
		props<{ response: ICardModel[] }>(),
	);
	
	export const loadFailure = createAction(
		'[Main] Load Failure',
		props<{ error: HttpErrorResponse }>(),
	);
	export const deleteTodo = createAction(
		'[Main] Delete Todo',
		props<{ id: number}>(),
	);
	export const deleteTodoSuccess = createAction(
		'[Main] Delete Todo Success',
		props<{ id: number }>()
	);
	export const deleteTodoFailure = createAction(
		'[Main] Delete Todo Failure',
		props<{ error: HttpErrorResponse}>(),
	);
	export const addTodo = createAction(
		'[Main] Add Todo',
		props<{ todo: ICardModel}>(),
	);
}
