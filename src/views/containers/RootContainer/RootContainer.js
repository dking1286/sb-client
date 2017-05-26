import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as viewSelectors from 'views/viewSelectors';
import DreamJobsContainer from '../DreamJobsContainer';
import ViewSkillsContainer from '../ViewSkillsContainer';

const RootContainer = ({ currentViewName, params }) => {
  switch (currentViewName) {
    case 'DreamJobs':
      return <DreamJobsContainer />;

    case 'ViewSkills':
      return (
        <ViewSkillsContainer params={params} />
      );

    default:
      return <div>Not found</div>;
  }
};

RootContainer.propTypes = {
  currentViewName: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  currentViewName: viewSelectors.getCurrentViewName(state),
  params: viewSelectors.getParams(state)
});

export default connect(mapStateToProps, null)(RootContainer);
