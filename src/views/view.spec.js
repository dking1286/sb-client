import * as viewActions from './viewActions';
import viewReducer from './viewReducer';

describe('viewActions', () => {
  describe('.change', () => {
    test('should return an action object with the correct type', () => {
      const actual = viewActions.change({
        currentViewName: 'Hello',
        params: {
          hello: 'world'
        }
      });
      const expected = {
        type: 'VIEW_CHANGE',
        payload: {
          currentViewName: 'Hello',
          params: {
            hello: 'world'
          }
        }
      };
      expect(actual).toEqual(expected);
    });
  });
});
