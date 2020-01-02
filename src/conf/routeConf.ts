import { IRoute } from '../infrastructure/interface/commonInterface';
import Home from '../modules/home/home';

const routeConfig: IRoute[] = [
	{
		path: '/home',
		component: Home,
		routes: [
			{
				path: '/home/sub1',
				component: () => 'sub2'
			},
			{
				path: '/home/sub2',
				component: () => 'sub2'
			},
			{
				path: '/home/sub3',
				component: () => 'sub3'
			}
		]
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
