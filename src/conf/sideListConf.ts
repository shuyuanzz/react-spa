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
	},
	{
		name: 'mainList2',
		subList: [
			{ name: 'about', path: '/about' },
			{ name: 'home', path: '/home' },
			{ name: 'user', path: '/user' }
		]
	},
	{
		name: 'mainList3',
		subList: [
			{ name: 'about', path: '/about' },
			{ name: 'home', path: '/home' },
			{ name: 'user', path: '/user' }
		]
	},
	{
		name: 'mainList4',
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
	'/user': 'user'
};
