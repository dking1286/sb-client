function createRolesService(apiService) {
  return {
    getAll() {
      return apiService.get('/roles');
    }
  };
}

createRolesService.$inject = ['apiService'];

export default createRolesService;
