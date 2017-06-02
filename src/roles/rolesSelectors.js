import { createSelector } from 'reselect';
import { idsToNumber } from 'core/functionUtils';

export const getCurrentRole = createSelector(
  (state) => state.roles.currentRole,
  (role) => idsToNumber(role)
);
