import { success } from 'core/actionHelpers';
import { byId, pipeThrough, map, flatten } from 'core/functionUtils';
import initialState from 'core/initialState';
import { COMPANIES_GET_ALL } from 'companies/companiesActionTypes';
import { ROLES_GET_ONE } from './rolesActionTypes';

export default (state = initialState.roles, action) => {
  const { type, payload } = action;
  switch (type) {
    case success(COMPANIES_GET_ALL): {
      const allRoles = pipeThrough(
        payload,
        map(companyToRolesList),
        flatten,
        map(replaceSkillsWithIds),
        byId
      );

      return { ...state, allRoles };
    }

    case success(ROLES_GET_ONE): {
      return { ...state, currentRole: payload };
    }

    default: {
      return state;
    }
  }
};

const replaceSkillsWithIds = (role) => ({
  ...role,
  skills: role.skills.map(skill => skill.id)
});

const companyToRolesList = (company) =>
  company.roles.map(role => ({ ...role, companyId: company.id }));
