import config from '../../config';

function prependApiHostname(url) {
  return `${config.apiUrl}${url}`;
}

function createApiService($http) {
  return {
    get(url) {
      return $http.get(prependApiHostname(url))
        .then(response => response.data);
    }
  };
}

createApiService.$inject = ['$http'];

export default createApiService;
