import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@blueprintjs/core';
import PageHeader from '../PageHeader';
import ViewSkillsHeading from '../ViewSkillsHeading';
import SkillsList from '../SkillsList';
import styles from './ViewSkillsPage.scss';

const ViewSkillsPage = ({ roleDescription, currentRole }) => (
  <div>
    <PageHeader />
    <ViewSkillsHeading roleDescription={roleDescription} />
    {currentRole ?
      <SkillsList
        roleDescription={roleDescription}
        skills={currentRole ? currentRole.skills : []}
      /> :
      <Spinner />}
  </div>
);

ViewSkillsPage.propTypes = {
  roleDescription: PropTypes.string.isRequired,
  currentRole: PropTypes.object
};

ViewSkillsPage.defaultProps = {
  currentRole: null
};

export default ViewSkillsPage;
