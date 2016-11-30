import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { ADD_COMMENT } from '../../src/actions/types';

// verify initial state
describe('Comments Reducer', () => {
  it('handles unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles type SAVE_COMMENT', () => {
    const action = { type: ADD_COMMENT, payload: 'comment to add' };
    expect(commentReducer([], action)).to.eql(['comment to add']);
  });
});

// verify each allowable action type
