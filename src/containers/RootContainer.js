import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DreamJobsContainer from './DreamJobsContainer';

const RootContainer = ({ currentView }) => {
  switch (currentView) {
    case 'DreamJobs':
      return <DreamJobsContainer />;
    default:
      return <div>Not found</div>;
  }
};

RootContainer.propTypes = {
  currentView: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentView: state.ui.currentView
});

export default connect(mapStateToProps, null)(RootContainer);
