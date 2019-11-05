import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from '../../modules/app/app.view'
import About from '../../modules/app/components/about'
import Home from '../../modules/app/components/home'
import Framework from '../framework/framework'
export default class RouterComponent extends React.Component {
	render() {
		return (
			<Router>
				<Framework>
					<Switch>
						<Route exact path="/" component={App}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/home" component={Home}></Route>
					</Switch>
				</Framework>
			</Router>
		)
	}
}
