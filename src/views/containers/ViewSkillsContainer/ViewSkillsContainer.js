import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRoleDescription } from 'roles/rolesHelpers';
import * as rolesActionCreators from 'roles/rolesActions';
import * as rolesSelectors from 'roles/rolesSelectors';
import * as routerSelectors from 'views/routerSelectors';
import ViewSkillsPage from 'views/components/ViewSkillsPage';

class ViewSkillsContainer extends React.Component {
  componentDidMount() {
    const { roleId, rolesActions } = this.props;
    rolesActions.getOne({ id: roleId });
  }

  render() {
    const { currentRole } = this.props;
    return (
      <ViewSkillsPage
        currentRole={currentRole}
        roleDescription={getRoleDescription(currentRole)}
      />
    );
  }
}

ViewSkillsContainer.propTypes = {
  roleId: PropTypes.number.isRequired,
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
  roleId: Number(routerSelectors.getParams(state).roleId),
  currentRole: rolesSelectors.getCurrentRole(state)
});

const mapDispatchToProps = (dispatch) => ({
  rolesActions: bindActionCreators(rolesActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewSkillsContainer);
