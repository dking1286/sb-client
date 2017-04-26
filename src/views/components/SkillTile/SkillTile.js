import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillTile.scss';

const SkillTile = ({ skill }) => (
  <div>
    <p>{skill.name}</p>
  </div>
);

SkillTile.propTypes = {
  skill: PropTypes.object.isRequired
};

export default SkillTile;
