import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import sideListConfig from '../../conf/sideListConf'
import { Link } from 'react-router-dom'
export default class Framework extends React.Component {
	render() {
		const { Header, Sider, Content } = Layout
		const { SubMenu } = Menu
		const { children } = this.props
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
							{sideListConfig.map((mainList) => {
								return (
									<SubMenu
										key={mainList.name}
										title={
											<span>
												<Icon type="user" />
												{mainList.name}
											</span>
										}
									>
										{mainList.subList.map((subList) => {
											return (
												<Menu.Item key={subList.name}>
													<Link to={subList.path}>{subList.name}</Link>
												</Menu.Item>
											)
										})}
									</SubMenu>
								)
							})}
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
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
		)
	}
}
