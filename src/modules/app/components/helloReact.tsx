import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

@inject('store')
@observer
export default class HelloReact extends React.Component<any, any> {
	componentDidMount() {
		this.props.store.getData()
	}
	render() {
		const { store } = this.props
		return (
			<div>
				<Button type="primary">{store.test}</Button>
				<h1>{store.testData.title}</h1>
				<h3>{store.testData.message}</h3>
			</div>
		)
	}
}
