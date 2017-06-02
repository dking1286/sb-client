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
