import React, { Component } from 'react';

export default class CommentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleTextChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
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
        <button action="submit">Add Comment</button>
      </form>
    );
  }
}
