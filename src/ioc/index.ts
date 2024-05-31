import IoCContainer from 'ioc-lite';

import {Logger} from '../services/logger';
import {HTTP} from '../services/http';
import {Users} from '../services/users';
import {ApiConfig, IHTTP, ILogger} from "../types";

export type IoCResources = {
    config: ApiConfig;
    logger: ILogger;
    userService: typeof Users;
    http: IHTTP;
}

export const createIoCContainer = (apiConfig: ApiConfig) => {
    const ioc = new IoCContainer();
    // you can register some resources right now below...

    ioc.registerClass('logger', Logger);
    ioc.registerClass('userService', Users);
    ioc.registerClass('http', HTTP);

    ioc.register('config', apiConfig);

    return ioc;
};
