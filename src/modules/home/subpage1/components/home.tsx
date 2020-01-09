import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../store/home.store';
import { Skeleton } from 'antd';

export default function Home(): JSX.Element {
	const { state, dispatch } = useContext(StoreContext);
	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'FETCH_SUCCESS', payload: { title: 'home page' } });
		}, 3000);
	});
	if (state.isLoading) return <Skeleton active />;
	if (!state.data) return null;
	return <h1>{state.data.title}</h1>;
}
