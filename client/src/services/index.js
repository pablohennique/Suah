import { axiosInstanceClient } from './apiConfig';
import { UserService } from './userService';

class ServiceClient {
	_userService;

	constructor() {
		this._userService = new UserService(axiosInstanceClient);
	}
}

export const serviceClient = new ServiceClient();
