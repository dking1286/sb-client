import * as companiesActions from './companiesActions';
import companiesReducer from './companiesReducer';
import companiesSaga from './companiesSaga';
import * as companiesService from './companiesService';
import * as companiesSelectors from './companiesSelectors';

describe('companiesActions', () => {
  describe('.getAll', () => {
    test('should return an action object with no payload', () => {
      const actual = companiesActions.getAll();
      const expected = { type: 'COMPANIES_GET_ALL' };
      expect(actual).toEqual(expected); // .toEqual checks for deep equality, not identity
    });
  });

  describe('.getAllSuccess', () => {
    test('should return an action object with the passed-in data as a payload', () => {
      const actual = companiesActions.getAllSuccess({ hello: 'world' });
      const expected = {
        type: 'COMPANIES_GET_ALL_SUCCESS',
        payload: { hello: 'world' }
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('.getAllFailure', () => {
    test('should return an action object with the passed-in data as a paylad', () => {
      const actual = companiesActions.getAllFailure({ hello: 'world' });
      const expected = {
        type: 'COMPANIES_GET_ALL_FAILURE',
        payload: { hello: 'world' }
      };
      expect(actual).toEqual(expected);
    });
  });
});

describe('companiesSelectors', () => {
  describe('getCurrentCompanies', () => {
    test('should return the "currentCompanies" inside the state, converting the ids to numbers', () => {
      const state = {
        companies: {
          currentCompanies: [
            { id: '1', name: 'Snap, Inc.' },
            { id: '2', name: 'Facebook' }
          ]
        }
      };

      const expected = [
        { id: 1, name: 'Snap, Inc.' },
        { id: 2, name: 'Facebook' }
      ];
      const actual = companiesSelectors.getCurrentCompanies(state);

      expect(actual).toEqual(expected);
    });
  });

  describe('currentCompaniesRolesList', () => {
    test('should convert a list of companies to a list of roles', () => {
      const state = {
        companies: {
          currentCompanies: [
            {
              id: '1',
              name: 'Facebook',
              roles: [
                { id: '1', name: 'iOS engineer' }
              ]
            },
            {
              id: '2',
              name: 'Snap, Inc.',
              roles: [
                { id: '2', name: 'UX designer' },
                { id: '3', name: 'Product manager' }
              ]
            }
          ]
        }
      };

      const expected = [
        {
          id: 1,
          name: 'iOS engineer',
          company: {
            name: 'Facebook'
          }
        },
        {
          id: 2,
          name: 'UX designer',
          company: {
            name: 'Snap, Inc.'
          }
        },
        {
          id: 3,
          name: 'Product manager',
          company: {
            name: 'Snap, Inc.'
          }
        }
      ];
      const actual = companiesSelectors.currentCompaniesRolesList(state);

      expect(actual).toEqual(expected);
    });
  });
});
