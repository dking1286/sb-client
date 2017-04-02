import angular from 'angular';
import rolesResource from './rolesResource';

const MODULE_NAME = 'sbClient.rolesController';

angular
  .module(MODULE_NAME, [rolesResource])
  .controller('rolesController', ['rolesResource', rolesController]);

function rolesController(Roles) {
  const roles = this;
  roles.tryThis = 'tryThis';
}

export default MODULE_NAME;
