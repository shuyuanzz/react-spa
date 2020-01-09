import React, { useReducer } from 'react';
import { StoreContext, initialState, reducer } from './store/home.store';
import Home from './components/home';
export default function HomeView(): JSX.Element {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			<Home />
		</StoreContext.Provider>
	);
}
