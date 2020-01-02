import { RouteI } from '../infrastructure/interface/commonInterface';
import Home from '../modules/home/home';

const routeConfig: RouteI[] = [
	{
		path: '/',
		component: () => 'index',
		exact: true
	},
	{
		path: '/home',
		component: Home,
		exact: true
	},
	{
		path: '/home/sub1',
		component: () => 'sub1'
	},
	{
		path: '/home/sub2',
		component: () => 'sub2'
	},
	{
		path: '/home/sub3',
		component: () => 'sub3'
	},
	{
		path: '/about',
		component: () => 'about'
	},
	{
		path: '/user',
		component: () => 'user'
	}
];
export default routeConfig;
