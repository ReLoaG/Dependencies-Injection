import IoCContainer from 'ioc-lite';

import {Logger} from '../services/logger';
import {HTTP} from '../services/http';
import {ApiConfig} from "../types";

export type IoCResources = {
    config: ApiConfig;
    logger: typeof Logger;
    http: typeof HTTP;
}

export const createIoCContainer = (config: ApiConfig) => {
    const ioc = new IoCContainer();
    // you can register some resources right now below...

    ioc.registerClass('logger', Logger);
    ioc.registerClass('http', HTTP);

    ioc.register('config', config);

    return ioc;
};
