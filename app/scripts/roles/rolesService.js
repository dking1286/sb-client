import angular from 'angular';
import appName from '../../app';
import '../api';

angular
  .module(appName)
  .factory('rolesService', ['apiService', createRolesService]);

function createRolesService(apiService) {
  return {
    getAll() {
      return apiService.get('/roles');
    }
  };
}
