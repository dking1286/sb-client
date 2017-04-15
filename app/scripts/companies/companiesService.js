function createCompaniesService(apiService) {
  return {
    getAll() {
      return apiService.get('/companies')
        .then(data => data.companies);
    }
  };
}

createCompaniesService.$inject = ['apiService'];

export default createCompaniesService;
