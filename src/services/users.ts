import type { ApiConfig, User, IHTTP } from '../types';
export class Users {
  static $inject = ['http', 'config'];

  http: IHTTP;
  apiConfig: ApiConfig;

  constructor(http: IHTTP, config: ApiConfig) {
    this.http = http;
    this.apiConfig = config;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
