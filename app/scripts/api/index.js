import angular from 'angular';
import createApiService from './apiService';

const api = angular.module('sbClient.api', []);

api.factory('apiService', createApiService);

export default api;
