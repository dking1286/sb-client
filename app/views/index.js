import angular from 'angular';
import roles from '../scripts/roles';
import appRoot from './containers/appRoot/appRoot';
import dreamJobContainer from './containers/dreamJobContainer/dreamJobContainer';
import backButton from './components/backButton/backButton';
import dreamJobHeading from './components/dreamJobHeading/dreamJobHeading';
import dreamJobPage from './components/dreamJobPage/dreamJobPage';
import jobsList from './components/jobsList/jobsList';
import jobsListItem from './components/jobsListItem/jobsListItem';
import logo from './components/logo/logo';
import pageHeader from './components/pageHeader/pageHeader';

const viewComponents = angular.module('sbClient.viewComponents', [
  roles.name
]);

viewComponents
  .component('appRoot', appRoot)
  .component('dreamJobContainer', dreamJobContainer)
  .component('backButton', backButton)
  .component('dreamJobHeading', dreamJobHeading)
  .component('dreamJobPage', dreamJobPage)
  .component('jobsList', jobsList)
  .component('jobsListItem', jobsListItem)
  .component('logo', logo)
  .component('pageHeader', pageHeader);

export default viewComponents;