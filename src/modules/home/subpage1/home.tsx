import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
const initialState = { count: 0 };
function reducer(state: { count: number }, action: string) {
	switch (action) {
		case 'increment':
			return {
				count: state.count + 1
			};
		case 'decrement':
			return {
				count: state.count - 1
			};
		case 'reset':
			return {
				count: 0
			};
		default:
			throw new Error('action type error');
	}
}
export default function Home(): JSX.Element {
	const [state, dispath] = useReducer(reducer, initialState);
	useEffect(() => {
		document.title = `you clicked ${state.count} times`;
	});
	return (
		<>
			<div>
				<ul>
					<li>
						<Link to="/home/sub1">sub1</Link>
					</li>
					<li>
						<Link to="/home/sub2">sub2</Link>
					</li>
					<li>
						<Link to="/home/sub3">sub3</Link>
					</li>
				</ul>
			</div>
			<button onClick={() => dispath('reset')}>Reset</button>
			<button onClick={() => dispath('increment')}>+</button>
			<button onClick={() => dispath('decrement')}>-</button>
		</>
	);
}
