import { expect } from '../test_helper';
import { ADD_COMMENT } from '../../src/actions/types';
import { addComment } from '../../src/actions';

describe('Actions', () => {
  describe('AddComment', () => {
    it('has correct type', () => {
      const action = addComment();
      expect(action.type).to.equal(ADD_COMMENT);
    });

    it('has correct payload', () => {
      const action = addComment('comment to add');
      expect(action.payload).to.equal('comment to add');
    });
  });
});
