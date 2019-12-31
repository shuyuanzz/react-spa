import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../../modules/app/pages/hello/app.view';
import About from '../../modules/app/pages/hello/components/about';
import Home from '../../modules/app/pages/hello/components/home';
import Framework from '../framework/framework';
import User from '../../modules/app/pages/hello/components/user';

export default class RouterComponent extends React.Component {
	render() {
		return (
			<Router>
				<Framework>
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/about" component={About} />
						<Route path="/home" component={Home} />
						<Route path="/user" component={User} />
					</Switch>
				</Framework>
			</Router>
		);
	}
}
