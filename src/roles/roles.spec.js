import * as rolesActions from './rolesActions';
import * as rolesService from './rolesService';
import rolesReducer from './rolesReducer';
import rolesSaga from './rolesSaga';
import * as rolesSelectors from './rolesSelectors';

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

describe('rolesSelectors', () => {
  describe('getCurrentRole', () => {
    test('should return the current role, converting the ids to numbers', () => {
      const state = {
        roles: {
          currentRole: {
            id: '1',
            name: 'iOS engineer',
            company: { name: 'AirBnB' },
            skills: [
              { id: '1', name: 'Email Design' },
              { id: '2', name: 'Art Direction' }
            ]
          }
        }
      };

      const expected = {
        id: 1,
        name: 'iOS engineer',
        company: { name: 'AirBnB' },
        skills: [
          { id: 1, name: 'Email Design' },
          { id: 2, name: 'Art Direction' }
        ]
      };
      const actual = rolesSelectors.getCurrentRole(state);

      expect(actual).toEqual(expected);
    });

    test('should return null if the currentRole is null', () => {
      const state = {
        roles: {
          currentRole: null
        }
      };

      const expected = null;
      const actual = rolesSelectors.getCurrentRole(state);

      expect(actual).toEqual(expected);
    });
  });
});
