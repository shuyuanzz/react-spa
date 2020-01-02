export interface ServiceConfg {
	[routeName: string]: {
		method: string;
		url: string;
	};
}
export interface RouteI {
	component: Function;
	path: string;
	routes?: RouteI[];
}
