import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component, props;

  beforeEach(() => {
    // example comments
    props = { comments: ['test comment', 'nutha one'] };
    component = renderComponent(CommentList, null, props);
  });

  it('renders li for each comment', () => {
    expect(component.find('li').length).to.equal(props.comments.length);
  });

  it('renders all comments', () => {
    expect(component).to.contain('test comment');
    expect(component).to.contain('nutha one');
  });
});
