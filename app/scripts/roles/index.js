import angular from 'angular';
import createRolesService from './rolesService';
import api from '../api';

const roles = angular.module('sbClient.roles', [
  api.name
]);

roles
  .factory('rolesService', createRolesService);

export default roles;
