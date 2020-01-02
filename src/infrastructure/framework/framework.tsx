import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import sideListConfig, { breadcrumbNameMap } from '../../conf/sideListConf';

interface Iprops {
	location: Location;
	children: any;
}
class Framework extends React.Component<Iprops, {}> {
	getBreadcrumbItem() {
		const { location } = this.props;
		const pathSnippets = location.pathname.split('/').filter((i) => i);
		const extraBreadcrumbItems = pathSnippets.map((_, index) => {
			const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
			return (
				<Breadcrumb.Item key={url}>
					<Link to={url}>{breadcrumbNameMap[url]}</Link>
				</Breadcrumb.Item>
			);
		});
		return [
			<Breadcrumb.Item key="app">
				<Link to="/">app</Link>
			</Breadcrumb.Item>
		].concat(extraBreadcrumbItems);
	}

	render() {
		const { Header, Sider, Content } = Layout;
		const { SubMenu } = Menu;
		const { children } = this.props;
		return (
			<Layout>
				<Header className="header">
					<div className="logo">
						<Link to="/">logo</Link>
					</div>
				</Header>
				<Layout>
					<Sider width={200} style={{ background: '#fff' }}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}
						>
							{sideListConfig.map((mainList) => (
								<SubMenu
									key={mainList.name}
									title={
										<span>
											<Icon type="user" />
											{mainList.name}
										</span>
									}
								>
									{mainList.subList.map((subList) => (
										<Menu.Item key={subList.name}>
											<Link to={subList.path}>{subList.name}</Link>
										</Menu.Item>
									))}
								</SubMenu>
							))}
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							{this.getBreadcrumbItem()}
						</Breadcrumb>
						<Content
							style={{
								background: '#fff',
								padding: 24,
								margin: 0,
								minHeight: 280
							}}
						>
							{children}
						</Content>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}
export default withRouter(Framework as any);
