import * as rolesActions from './rolesActions';
import * as rolesService from './rolesService';
import rolesReducer from './rolesReducer';
import rolesSaga from './rolesSaga';

describe('rolesActions', () => {
  describe('.getOne', () => {
    test('should return an action object with the passed-in data as a payload', () => {
      const actual = rolesActions.getOne(3);
      const expected = { type: 'ROLES_GET_ONE', payload: 3 };
      expect(actual).toEqual(expected);
    });
  });

  describe('.getOneSuccess', () => {
    test('should return an action object with the passed-in data as a payload', () => {
      const actual = rolesActions.getOneSuccess({ hello: 'world' });
      const expected = {
        type: 'ROLES_GET_ONE_SUCCESS',
        payload: { hello: 'world' }
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('.getOneFailure', () => {
    test('should return an action object with the passed-in data as a payload', () => {
      const actual = rolesActions.getOneFailure({ hello: 'world' });
      const expected = {
        type: 'ROLES_GET_ONE_FAILURE',
        payload: { hello: 'world' }
      };
      expect(actual).toEqual(expected);
    });
  });
});
