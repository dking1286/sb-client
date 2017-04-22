import angular from 'angular';
import createCompaniesService from './companiesService';
import api from '../api';

const companies = angular.module('sbClient.companies', [
  api.name
]);

companies
  .factory('companiesService', createCompaniesService);

export default companies;
