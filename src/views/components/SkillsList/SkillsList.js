import React from 'react';
import PropTypes from 'prop-types';
import HelpIcon from '../HelpIcon/HelpIcon';
import SkillTile from '../SkillTile/SkillTile';
import styles from './SkillsList.scss';

const SkillsList = ({ skills }) => (
  <div>
    <div><HelpIcon /></div>
    <h2>Develop these skills to get the job</h2>
    {skills.map((skill, i) =>
      <SkillTile key={i} skill={skill} />)}
  </div>
);

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SkillsList;
