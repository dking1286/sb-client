import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DreamJobsContainer from './DreamJobsContainer';

const RootContainer = ({ currentViewName }) => {
  switch (currentViewName) {
    case 'DreamJobs':
      return <DreamJobsContainer />;
    default:
      return <div>Not found</div>;
  }
};

RootContainer.propTypes = {
  currentViewName: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentViewName: state.view.currentViewName
});

export default connect(mapStateToProps, null)(RootContainer);
