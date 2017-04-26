import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../PageHeader/PageHeader';
import ViewSkillsHeading from '../ViewSkillsHeading/ViewSkillsHeading';
import SkillsList from '../SkillsList/SkillsList';
import styles from './ViewSkillsPage.scss';

const ViewSkillsPage = ({ roleDescription, currentRole }) => (
  <div>
    <PageHeader />
    {currentRole ?
      <div>
        <ViewSkillsHeading roleDescription={roleDescription} />
        <SkillsList skills={currentRole ? currentRole.skills : []} />
      </div> :
      <p>Loading...</p>} {/* This placeholder will be replaced with a spinner*/}
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
