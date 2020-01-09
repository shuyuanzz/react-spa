import React from 'react';

export interface State {
	isLoading: boolean;
	data: Data;
}
export interface Action {
	type: 'FETCH_INIT' | 'FETCH_SUCCESS';
	payload?: any;
	errMessage?: string;
}
export interface Data {
	[name: string]: any;
}
export const StoreContext = React.createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>(null);
export const initialState: State = {
	isLoading: true,
	data: {}
};
export const reducer: React.Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case 'FETCH_INIT':
			return { ...state };
		case 'FETCH_SUCCESS':
			return {
				isLoading: false,
				data: action.payload
			};
		default:
			return { ...state };
	}
};
