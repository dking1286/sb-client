import React from 'react';
import { Fragment } from 'redux-little-router';
import { absoluteRoute } from 'views/routerHelpers';
import DreamJobsContainer from '../DreamJobsContainer';
import ViewSkillsContainer from '../ViewSkillsContainer';

const RootContainer = () => (
  <div>
    <Fragment withConditions={absoluteRoute('/')}>
      <DreamJobsContainer />
    </Fragment>
    <Fragment forRoute="/roles/:roleId">
      <ViewSkillsContainer />
    </Fragment>
  </div>
);

RootContainer.propTypes = {

};

export default RootContainer;
