export class UserService {
	_path = '/user';
	_axios;

	constructor(axiosInstance) {
		this._axios = axiosInstance;
	}

	async register(data) {
		try {
			return await this._axios.post(`${this._path}/register`, data);
		} catch (e)	{
			"🚀 ~ file: authService.js ~ AuthService ~ resiter ~ e",
			e
			return e;
		}
	}

	async login(data) {
    try {
      return await this._axios.post(`${this._path}/login`, data);
    } catch (e) {
      console.log(
        "🚀 ~ file: authService.js~ AuthService ~ login ~ e",
        e
      );
      return e;
    }
  }
}