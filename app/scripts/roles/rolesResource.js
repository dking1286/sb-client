import angular from 'angular';
import config from '../../config.json';

const MODULE_NAME = 'sbClient.rolesResource';

angular
  .module(MODULE_NAME, ['ngResource'])
  .factory('rolesResource', ['$resource', rolesFactory]);

function rolesFactory($resource) {
  return $resource(`${config.get}/roles`);
}

export default MODULE_NAME;
