import template from './appRoot.html';

const appRoot = {
  template,
  controller: appRootController
};

function appRootController($scope, rolesService) {
  const $ctrl = this;

  $ctrl.roles = [];

  rolesService.getAll()
    .then((roles) => {
      $ctrl.roles = roles;
    });
}

appRootController.$inject = ['$scope', 'rolesService'];

export default appRoot;
