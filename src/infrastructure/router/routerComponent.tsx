import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Framework from '../framework/framework';
import { RouteI } from '../interface/commonInterface';
import routeConfig from '../../conf/routeConf';

export function RouterComponent() {
	return (
		<Router>
			<Framework>
				<Switch>
					{routeConfig.map((route, index) => (
						<RouteWithSubRoutes {...route} key={index} />
					))}
				</Switch>
			</Framework>
		</Router>
	);
}
export function RouteWithSubRoutes(route: RouteI) {
	return (
		<Route
			path={route.path}
			render={(props) => <route.component routes={route.routes} {...props} />}
		/>
	);
}
