import { renderComponent, expect } from '../test_helper';
import CommentEditor from '../../src/components/comment_editor';

describe('CommentEditor', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentEditor);
  });

  it('has correct class name', () => {
    expect(component).to.have.class('comment-editor');
  });

  it('has text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Editing Text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment string');
    });

    it('shows text entered', () => {
      expect(component.find('textarea')).to.have.value('new comment string');
    });

    it('clears input when submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
