import { createReducer, on } from '@ngrx/store';
import { MainActions } from "./main.actions";
import { ICardModel } from "../../models/card-model";

export namespace fromMain {
	export const mainFeatureKey = 'main';
	
	export interface IState {
		isLoading: boolean;
		cards: ICardModel[];
	}
	
	export const initialState: IState = {
		isLoading: false,
		cards: [],
	};
	
	export const reducer = createReducer(
		initialState,
		on(MainActions.loadSuccess, (state, {response}) => ({
			...state, cards: response,
		})),
		on(MainActions.deleteTodoSuccess, (state, {id}) => ({
		...state, cards: clearDeletedCard(state.cards, id),
	})),
	on(MainActions.addTodo, (state, {todo}) => ({
		...state, cards: [...state.cards,todo]
	}))
	)
}
function clearDeletedCard(arr: ICardModel[] | null, deleted: number): ICardModel[] | []{
	if (arr !== null) {
		return arr.filter( (elem: ICardModel) => elem.id !== deleted )
	}
	return []
}
