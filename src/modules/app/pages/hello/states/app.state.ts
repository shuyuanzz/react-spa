import BaseState from '../../../../../infrastructure/states/base.state'
import { observable, action } from 'mobx'
import httpClient from '../../../../../infrastructure/http/httpClient'
export default class Appstate extends BaseState {
	@observable public testData: {
		title: string
		message: string
	} = {
		title: '',
		message: ''
	}
	public test: String
	constructor() {
		super()
		this.test = 'hello react'
	}
	@action.bound
	getData() {
		httpClient
			.fetch<{
				title: string
				message: string
			}>('home')
			.then((data) => {
				if (data) {
					this.testData = data as any
				}
			})
			.catch((error) => console.error('err:', error))
	}
}
