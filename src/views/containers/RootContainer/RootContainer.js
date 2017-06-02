import React from 'react';
import { Fragment } from 'redux-little-router';
import DreamJobsContainer from '../DreamJobsContainer';
import ViewSkillsContainer from '../ViewSkillsContainer';


const RootContainer = () => (
  <div>
    <Fragment forRoute="/">
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
