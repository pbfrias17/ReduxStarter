import React, { Component } from 'react';
import CommentEditor from './comment_editor';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h4>Comments</h4>
        <CommentEditor />
        <CommentList />
      </div>
    );
  }
}
