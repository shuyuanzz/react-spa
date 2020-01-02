import React from 'react';
import { Link } from 'react-router-dom';
import { RouteI } from '../../infrastructure/interface/commonInterface';

export default function Home() {
	return (
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
	);
}
