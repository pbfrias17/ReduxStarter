import React, { Component } from 'react';
import CommentEditor from './comment_editor';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React Simple Starter</div>
        <CommentEditor />
      </div>
    );
  }
}
