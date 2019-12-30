import React from 'react'
import mobxProvider from '../../../../infrastructure/@decorators/mobxProvider'
import Appstate from './states/app.state'
import HelloReact from './components/helloReact'
@mobxProvider(Appstate)
export default class App extends React.Component {
	render() {
		return <HelloReact />
	}
}
