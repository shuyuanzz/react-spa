import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
	const [count, setCount] = useState(0);
	useEffect(() => {
		document.title = `you clicked ${count} times`;
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
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</>
	);
}
