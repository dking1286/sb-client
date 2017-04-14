import template from './jobsList.html';
import styles from './jobsList.scss';

const jobsList = {
  template,
  controller: jobsListController,
  bindings: {
    roles: '<'
  }
};

function jobsListController() {
  const $ctrl = this;
  $ctrl.styles = styles;
  $ctrl.fillers = [];

  $ctrl.$onChanges = ({ roles }) => {
    if (roles.currentValue !== roles.previousValue) {
      $ctrl.fillers = fillers(roles.currentValue);
    }
  };
}

export function fillers(roles) {
  const numberOfFillers = (12 - (roles.length % 12)) % 12;
  return new Array(numberOfFillers);
}

export default jobsList;
