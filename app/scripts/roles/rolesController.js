import angular from 'angular';

const MODULE_NAME = 'sbClient.rolesController';

angular
  .module(MODULE_NAME, [])
  .controller('rolesController', [
    '$scope',
    rolesController
  ]);

function rolesController($scope) {
  $scope.tryThis = 'tryThis';
}

export default MODULE_NAME;