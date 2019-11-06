import { ServiceConfg } from '../../infrastructure/interface/serviceConfig'
import serviceConfg, { BASE_URL, TIME_OUT } from '../../conf/restServiceConf'
import Axios, { AxiosInstance } from 'axios'
class HttpClient {
	public http: AxiosInstance
	private serviceConfig: ServiceConfg
	constructor(serviceConf: ServiceConfg) {
		this.http = Axios.create({
			baseURL: BASE_URL,
			timeout: TIME_OUT,
			headers: {
				'Content-type': 'application/json'
			}
		})
		this.serviceConfig = serviceConf
	}
	public fetch(routeName: string, config?: any) {
		const currentRoute = this.serviceConfig[routeName]
		if (!currentRoute) throw new Error('Enter a wrong router name')
		return this.http({
			method: currentRoute.method,
			url: currentRoute.url,
			...config
		})
	}
}
export default new HttpClient(serviceConfg)
