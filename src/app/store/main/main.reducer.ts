import { createReducer, on } from '@ngrx/store';
import { MainActions } from "./main.actions";
import { ICardModel } from "../../models/card-model";

export namespace fromMain {
	export const mainFeatureKey = 'main';
	
	export interface IState {
		id: number | null;
		title: string;
		isInvalid: boolean;
		isLoading: boolean;
		cards: ICardModel[];
	}
	
	export const initialState: IState = {
		id: null,
		title: '',
		isInvalid: true,
		isLoading: false,
		cards: [],
	};
	
	export const reducer = createReducer(
		initialState,
		
		on( MainActions.input, (state, {title, isInvalid}) => ({
			...state, title, isInvalid,
		}) ),
		on(MainActions.loadSuccess, (state, {response}) => ({
			...state, cards: response,
		})),
		on(MainActions.deleteTodoSuccess, (state, {id}) => ({
		...state, cards: clearDeletedCard(state.cards, id),
	}))
	)
}
function clearDeletedCard(arr: ICardModel[] | null, deleted: number): ICardModel[] | []{
	if (arr !== null) {
		return arr.filter( (elem: ICardModel) => elem.id !== deleted )
	}
	return []
}
