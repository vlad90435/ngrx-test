import { createFeatureSelector, createSelector } from "@ngrx/store";
import { fromMain } from "./main.reducer";

export const selectMainState = createFeatureSelector<fromMain.IState>(
	fromMain.mainFeatureKey,
);
export namespace MainSelectors {
	export const selectCards = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.cards,
	);
	export const selectCard = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.cards,
	);
	export const selectCompleted = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.cards.filter(elem => elem.completed).length,
	);
	export const selectUncompleted = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.cards.filter(elem => !elem.completed).length,
	);
	export const selectLastId = createSelector(
		selectMainState,
		(state: fromMain.IState) => {
			if (state.cards.length <= 0){
				return 0
			}
			let largest = 0;
			let arr:number[] = [];
			state.cards.forEach((elem) => {
				arr.push(elem.id)
			})
			return Math.max(...arr);
		},
	);
	export const selectLastUserId = createSelector(
		selectMainState,
		(state: fromMain.IState) => {
			if (state.cards.length <= 0){
				return 0
			}
			let largest = 0;
			let arr:number[] = [];
			state.cards.forEach((elem) => {
				arr.push(elem.userId)
			})
			return Math.max(...arr);
		},
	);
}
