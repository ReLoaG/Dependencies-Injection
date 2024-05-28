import { Users } from './services/users';
import { Logger } from './services/logger';

import {createIoCContainer, IoCResources} from "./ioc";

import type { User, ApiConfig } from './types';
import IoCContainer from "ioc-lite";

const renderUsers = async (ioc: IoCContainer<IoCResources>) => {
  const config = ioc.resolve('config');
  const usersService = new Users(config);
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  const ioc = createIoCContainer(config.api);

  renderUsers(ioc);
};

window.onload = (event: Event) => {
  const logger = new Logger();

  logger.info('Page is loaded.');

  app();
};
