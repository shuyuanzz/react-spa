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
