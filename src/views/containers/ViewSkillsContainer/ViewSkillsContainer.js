import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as rolesActionCreators from 'roles/rolesActions';
import * as rolesSelectors from 'roles/rolesSelectors';
import ViewSkillsPage from 'views/components/ViewSkillsPage';

class ViewSkillsContainer extends React.Component {
  componentDidMount() {
    const { params, rolesActions } = this.props;
    rolesActions.getOne({ id: params.roleId });
  }

  render() {
    const { params, currentRole } = this.props;
    return (
      <ViewSkillsPage
        roleDescription={params.roleDescription}
        currentRole={currentRole}
      />
    );
  }
}

ViewSkillsContainer.propTypes = {
  params: PropTypes.shape({
    roleId: PropTypes.number.isRequired,
    roleDescription: PropTypes.string.isRequired
  }).isRequired,
  currentRole: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string
    }),
    skills: PropTypes.array
  }),
  rolesActions: PropTypes.shape({
    getOne: PropTypes.func.isRequired
  }).isRequired
};

ViewSkillsContainer.defaultProps = {
  currentRole: null
};

const mapStateToProps = (state) => ({
  currentRole: rolesSelectors.getCurrentRole(state)
});

const mapDispatchToProps = (dispatch) => ({
  rolesActions: bindActionCreators(rolesActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewSkillsContainer);
