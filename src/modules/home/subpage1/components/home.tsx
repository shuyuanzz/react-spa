import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../store/home.store';
import { Skeleton } from 'antd';
import styles from '../style/home.module.scss';
export default function Home(): JSX.Element {
	const { state, dispatch } = useContext(StoreContext);
	useEffect(() => {
		setTimeout(() => {
			dispatch({
				type: 'FETCH_SUCCESS',
				payload: { title: 'home page', name: 'shuyuan' }
			});
		}, 3000);
	});
	if (state.isLoading) return <Skeleton active />;
	if (!state.data) return null;
	return (
		<>
			<h1 className={styles.title}>{state.data.title}</h1>
			<p>{state.data.name}</p>
		</>
	);
}
