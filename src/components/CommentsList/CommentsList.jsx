import React, { Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class CommentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map((comment) => <li key={comment.id}><Link to={`/comments/${comment.id}`}>{comment.name}</Link>: {comment.body}</li>)}
      </ul>
    );
  }
}