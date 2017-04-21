import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as viewActionCreators from 'views/viewActions';
import DreamJobsContainer from './DreamJobsContainer';

const RootContainer = ({ currentViewName, viewActions }) => {
  switch (currentViewName) {
    case 'DreamJobs':
      return <DreamJobsContainer viewActions={viewActions} />;
    default:
      return <div>Not found</div>;
  }
};

RootContainer.propTypes = {
  currentViewName: PropTypes.string.isRequired,
  viewActions: PropTypes.objectOf(PropTypes.func).isRequired
};

const mapStateToProps = (state) => ({
  currentViewName: state.view.currentViewName
});

const mapDispatchToProps = (dispatch) => ({
  viewActions: bindActionCreators(viewActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
