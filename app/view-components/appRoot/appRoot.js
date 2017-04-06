import angular from 'angular';
import template from './appRoot.html';
import appName from '../../app';

const MODULE_NAME = 'appRoot';

export default angular.module(appName).component(MODULE_NAME, {
  template,
  controller: appRootController
});

function appRootController($scope, rolesService) {
  this.label = 'hello';
  this.roles = [];
  rolesService.getAll()
    .then((roles) => {
      this.roles = roles;
    });
}

appRootController.$inject = ['$scope', 'rolesService'];
