import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Position } from '@blueprintjs/core';
import styles from './HelpIcon.scss';

const HelpIcon = ({ roleDescription }) => (
  <div className={styles.container}>
    <Tooltip
      content={<TooltipContent roleDescription={roleDescription} />}
      position={Position.BOTTOM}
    >
      <div className={styles.innerContainer}>?</div>
    </Tooltip>
  </div>
);

const TooltipContent = ({ roleDescription }) => (
  <p>
    These are the skills of current {pluralizeRoleDescription(roleDescription)}
  </p>
);

HelpIcon.propTypes = {
  roleDescription: PropTypes.string.isRequired
};

TooltipContent.propTypes = {
  roleDescription: PropTypes.string.isRequired
};

export const pluralizeRoleDescription = (roleDescription) => {
  const [roleName, companyName] = roleDescription.split(' at ');
  return `${roleName}s at ${companyName}`;
};

export default HelpIcon;
