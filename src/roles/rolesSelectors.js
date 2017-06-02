import { createSelector } from 'reselect';
import { pipeThrough, map, filter } from 'core/functionUtils';

export const currentCompaniesRolesList = createSelector(
  (state) => state.roles.allRoles,
  (state) => state.companies.allCompanies,
  (state) => state.companies.currentCompanies,
  (allRoles, allCompanies, currentCompanies) => pipeThrough(
    allRoles,
    Object.values,
    filter((role) => currentCompanies.includes(role.companyId)),
    map((role) => ({ ...role, company: allCompanies[role.companyId] }))
  )
);

export const getRoleByRouteId = createSelector(
  (state) => state.router.params.roleId,
  (state) => state.roles.allRoles,
  (state) => state.skills.allSkills,
  (state) => state.companies.allCompanies,
  (roleId, allRoles, allSkills, allCompanies) => pipeThrough(
    allRoles[roleId],
    (role) => ({
      ...role,
      skills: role.skills.map(id => allSkills[id]),
      company: allCompanies[role.companyId]
    })
  )
);
