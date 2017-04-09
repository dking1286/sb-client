import template from './appRoot.html';

const appRoot = {
  template,
  controller: appRootController
};

function appRootController(rolesService) {
  const $ctrl = this;
  $ctrl.label = 'hello';
  $ctrl.roles = [];

  rolesService.getAll()
    .then((roles) => {
      $ctrl.roles = roles;
    });
}

appRootController.$inject = ['rolesService'];

export default appRoot;
