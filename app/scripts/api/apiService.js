import angular from 'angular';
import appName from '../../app';
import config from '../../config';

function prependApiHostname(url) {
  return `${config.apiUrl}${url}`;
}

angular
  .module(appName)
  .factory('apiService', ['$http', createApiService]);

function createApiService($http) {
  return {
    get(url) {
      return $http.get(prependApiHostname(url))
        .then(response => response.data.roles);
    }
  };
}
