//app_test.js: tests the functionality of app.js
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows comment editor', () => {
    expect(component.find('.comment-editor')).to.exist;
  });

  it('shows comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
