import angular from 'angular';
import rolesController from './scripts/roles/rolesController';

const MODULE_NAME = 'sbClient.app';

angular
  .module(MODULE_NAME, [rolesController]);

export default MODULE_NAME;
