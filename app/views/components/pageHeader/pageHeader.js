import template from './pageHeader.html';
import styles from './pageHeader.scss';

const pageHeader = {
  template,
  controller: pageHeaderController
};

function pageHeaderController() {
  const $ctrl = this;
  $ctrl.styles = styles;
}

export default pageHeader;
