import React from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import App from '../../modules/app/app.view'
import About from '../../modules/app/components/about'
import Home from '../../modules/app/components/home'
export default class RouterComponent extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/home">home</Link>
						</li>
					</ul>
				</div>
				<Switch>
					<Route exact path="/" component={App}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/home" component={Home}></Route>
				</Switch>
			</Router>
		)
	}
}
