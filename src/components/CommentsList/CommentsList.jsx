import React, { Component, PureComponent } from 'react';

export default class CommentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map((comment) => <li key={comment.id}>{comment.name}: {comment.body}</li>)}
      </ul>
    );
  }
}