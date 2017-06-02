import { COMPANIES_GET_ALL } from './companiesActionTypes';
import { success } from 'core/actionHelpers';
import { byId, pipeThrough, map } from 'core/functionUtils';
import initialState from 'core/initialState';

export default (state = initialState.companies, action) => {
  const { type, payload } = action;
  switch (type) {
    case success(COMPANIES_GET_ALL): {
      const allCompanies = pipeThrough(
        payload,
        map(replaceRolesWithIds),
        byId
      );

      const currentCompanies = payload.map((company) => company.id);

      return { ...state, allCompanies, currentCompanies };
    }

    default: {
      return state;
    }
  }
};

const replaceRolesWithIds = (company) => ({
  ...company,
  roles: company.roles.map(role => role.id)
});
