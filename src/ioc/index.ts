import IoCContainer from 'ioc-lite';

import {Logger} from '../services/logger';
import {HTTP} from '../services/http';
import {Users} from '../services/users';
import {ApiConfig} from "../types";

export type IoCResources = {
    config: ApiConfig;
    logger: typeof Logger;
    userService: typeof Users;
    http: typeof HTTP;
}

export const createIoCContainer = () => {
    const ioc = new IoCContainer<IoCResources>();

    ioc.registerClass('logger', Logger);
    ioc.registerClass('userService', Users);
    ioc.registerClass('http', HTTP);

    return ioc;
};
