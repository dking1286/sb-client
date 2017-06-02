import { createSelector } from 'reselect';

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
  (state) => state.companies.allCompanies,
  (currentCompanies, allCompanies) =>
    currentCompanies.map(id => allCompanies[id])
);

export const currentCompaniesRolesList = createSelector(
  getCurrentCompanies,
  (currentCompanies) => companiesListToRolesList(currentCompanies)
);
