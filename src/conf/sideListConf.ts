const sideListConfig: {
	name: string;
	subList: { name: string; path: string }[];
}[] = [
	{
		name: 'mainList1',
		subList: [
			{ name: 'about', path: '/about' },
			{ name: 'home', path: '/home' },
			{ name: 'user', path: '/user' }
		]
	}
];
export default sideListConfig;

export const breadcrumbNameMap: {
	[name: string]: string;
} = {
	'/about': 'about',
	'/home': 'home',
	'/home/sub1': 'sub1',
	'/home/sub2': 'sub2',
	'/home/sub3': 'sub3',
	'/user': 'user'
};

export const subMenuMap: {
	[path: string]: {
		defaultSelectedKeys: string;
		defaultOpenKeys: string;
	};
} = {
	default: {
		defaultOpenKeys: 'mainList1',
		defaultSelectedKeys: 'about'
	},
	about: {
		defaultOpenKeys: 'mainList1',
		defaultSelectedKeys: 'about'
	},
	home: {
		defaultOpenKeys: 'mainList1',
		defaultSelectedKeys: 'home'
	},
	user: {
		defaultOpenKeys: 'mainList1',
		defaultSelectedKeys: 'user'
	}
};
