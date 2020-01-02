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
	exact?: boolean;
}

export interface BreadcrumbConfI {
	path: string;
	breadcrumbName: string;
	children?: BreadcrumbConfI[];
}
