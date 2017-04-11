import template from './dreamJobHeading.html';
import styles from './dreamJobHeading.scss';

const dreamJobHeading = {
  template,
  controller: dreamJobHeadingController
};

function dreamJobHeadingController() {
  const $ctrl = this;
  $ctrl.styles = styles;
}

export default dreamJobHeading;
