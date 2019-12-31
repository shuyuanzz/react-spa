const routeConfig: {
	name: string;
	component: string;
	path: string;
}[] = [
	{
		name: 'app',
		path: '/',
		component: 'APP'
	},
	{
		name: 'about',
		path: '/about',
		component: 'About'
	},
	{
		name: 'home',
		path: '/home',
		component: 'Home'
	},
	{
		name: 'user',
		path: '/user',
		component: 'User'
	}
];
export default routeConfig;
