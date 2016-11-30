import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleTextChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="comment-editor"
      >
        <textarea
          onChange={this.handleTextChange.bind(this)}
          value={this.state.comment}
        />
        <div>
          <button action="submit">Add Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentEditor);
