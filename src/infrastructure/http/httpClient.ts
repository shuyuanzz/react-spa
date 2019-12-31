import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import { message } from 'antd';
import { ServiceConfg } from '../../infrastructure/interface/commonInterface';
import serviceConfg, { BASE_URL, TIME_OUT } from '../../conf/restServiceConf';

export class HttpClient {
	public http: AxiosInstance;

	private serviceConfig: ServiceConfg;

	constructor(serviceConf: ServiceConfg) {
		this.http = Axios.create({
			baseURL: BASE_URL,
			timeout: TIME_OUT,
			headers: {
				'Content-type': 'application/json'
			}
		});
		this.http.interceptors.response.use(
			(res) => res,
			(err) => {
				message.error(err.message);
			}
		);
		this.serviceConfig = serviceConf;
	}

	public fetch<T>(routeName: string, config?: any): AxiosPromise<T> {
		const currentRoute = this.serviceConfig[routeName];
		if (!currentRoute) throw new Error('Enter a wrong router name');
		return this.http({
			method: currentRoute.method,
			url: currentRoute.url,
			...config
		});
	}
}
export default new HttpClient(serviceConfg);
