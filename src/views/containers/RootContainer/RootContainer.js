import React from 'react';
import { Fragment } from 'redux-little-router';
import DreamJobsContainer from '../DreamJobsContainer';
import ViewSkillsContainer from '../ViewSkillsContainer';


const RootContainer = () => (
  <Fragment forRoute="/">
    <div>
      <Fragment forRoute="/home">
        <DreamJobsContainer />
      </Fragment>
      <Fragment forRoute="/roles/:roleId">
        <ViewSkillsContainer />
      </Fragment>
    </div>
  </Fragment>
);

RootContainer.propTypes = {

};

export default RootContainer;
