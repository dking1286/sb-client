export const getRoleDescription = (role) => (
  role ? `${role.name} at ${role.company.name}` : ''
);
