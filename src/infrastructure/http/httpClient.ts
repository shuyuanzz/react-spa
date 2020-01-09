import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import { message } from 'antd';
import { ServiceConfg } from '../../infrastructure/interface/commonInterface';
import { BASE_URL, TIME_OUT } from '../../conf/restServiceConf';

export class HttpClient {
	public http: AxiosInstance;

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
			} //todo: 与后端约定后统一做错误处理
		);
	}
	public Get<T>(url: string, config?: any): AxiosPromise<T> {
		return this.http.get({
			url: url,
			...config
		});
	}
	public Post<T>(url: string, config?: any): AxiosPromise<T> {
		return this.http.post({
			url: url,
			...config
		});
	}
	public Put<T>(url: string, config?: any): AxiosPromise<T> {
		return this.http.put({
			url: url,
			...config
		});
	}
	public Delete<T>(url: string, config?: any): AxiosPromise<T> {
		return this.http.delete({
			url: url,
			...config
		});
	}
}
export default new HttpClient(serviceConfg);
