import { createSelector } from 'reselect';
import { idsToNumber } from 'core/functionUtils';

const companyToRolesList = (company) => company.roles.map(role => ({
  id: role.id,
  name: role.name,
  company: { name: company.name }
}));

const companiesListToRolesList = (companies) => {
  return companies.reduce((roles, company) => {
    companyToRolesList(company).forEach(role => roles.push(role));
    return roles;
  }, []);
};

export const getCurrentCompanies = createSelector(
  (state) => state.companies.currentCompanies,
  (currentCompanies) => idsToNumber(currentCompanies)
);

export const currentCompaniesRolesList = createSelector(
  getCurrentCompanies,
  (currentCompanies) => companiesListToRolesList(currentCompanies)
);
