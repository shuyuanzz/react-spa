import httpClient, { HttpClient } from '../http/httpClient'

export default class BaseState {
	public httpClient: HttpClient

	constructor() {
		this.httpClient = httpClient
	}
}
