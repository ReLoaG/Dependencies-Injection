import type {ApiConfig, ILogger, IHTTP} from '../types';
export class HTTP implements IHTTP{
  static $inject = ['logger', 'config'];

  logger: ILogger;
  apiConfig: ApiConfig;

  constructor(logger: ILogger, config: ApiConfig) {
    this.logger = logger;
    this.apiConfig = config;
  }

  async get(url: string) {
    const response = await fetch(`${this.apiConfig.path}${url}`);

    if (response.ok) {
      const responseData = await response.json();
      this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

      return responseData;
    } else {
      this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
    }
  }
}
