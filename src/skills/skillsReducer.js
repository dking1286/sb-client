import { success } from 'core/actionHelpers';
import { byId, pipeThrough, map, flatten } from 'core/functionUtils';
import initialState from 'core/initialState';
import { COMPANIES_GET_ALL } from 'companies/companiesActionTypes';

export default (state = initialState.skills, action) => {
  const { type, payload } = action;
  switch (type) {
    case success(COMPANIES_GET_ALL): {
      const allSkills = pipeThrough(
        payload,
        map((company) => company.roles),
        flatten,
        map((role) => role.skills),
        flatten,
        byId
      );

      return { ...state, allSkills };
    }

    default: {
      return state;
    }
  }
};
