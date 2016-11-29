import { renderComponent , expect } from '../test_helper';
import CommentEditor from '../../src/components/comment_editor';

describe('CommentEditor', () => {
  let component

  beforeEach(() => {
    component = renderComponent(CommentEditor);
  });

  it('has textarea lel', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has button swet', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Functionality', () => {
    let component;

    beforeEach(() => {
      component = renderComponent(CommentEditor);
    });

    it('textarea reflects text change', () => {
      component.find('textarea').simulate('change', 'new comment');
      expect(component.find('textarea')).to.contain('new comment');
    });
  });

});
