import template from './dreamJobContainer.html';

const dreamJobContainer = {
  template,
  controller: dreamJobContainerController
};

function dreamJobContainerController(companiesService) {
  const $ctrl = this;
  $ctrl.roles = [];

  $ctrl.$onInit = () => {
    companiesService.getAll()
      .then((companies) => {
        $ctrl.roles = companyListToRolesList(companies);
      });
  };
}

dreamJobContainerController.$inject = ['companiesService'];

function companyListToRolesList(companies) {
  return companies.reduce((roles, company) => {
    return roles.concat(companyToRolesList(company));
  }, []);
}

function companyToRolesList(company) {
  return company.roles.map(role => ({
    name: role.name,
    company: { name: company.name }
  }));
}

export default dreamJobContainer;
