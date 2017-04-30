import React from 'react';
import PropTypes from 'prop-types';
import HelpIcon from '../HelpIcon';
import SkillTile from '../SkillTile';
import styles from './SkillsList.scss';

const SkillsList = ({ roleDescription, skills }) => (
  <div className={styles.container}>
    <div className={styles.helpIconWrapper}>
      <HelpIcon roleDescription={roleDescription} />
    </div>
    <h2 className={styles.heading}>Develop these skills to get the job</h2>
    {skills.map((skill, i) =>
      <SkillTile key={i} skill={skill} />)}
  </div>
);

SkillsList.propTypes = {
  roleDescription: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SkillsList;
