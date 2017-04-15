import template from './dreamJobPage.html';
import styles from './dreamJobPage.scss';

const dreamJobPage = {
  template,
  controller: dreamJobPageController,
  bindings: {
    roles: '<'
  }
};

function dreamJobPageController() {
  const $ctrl = this;
  $ctrl.styles = styles;
}

export default dreamJobPage;
