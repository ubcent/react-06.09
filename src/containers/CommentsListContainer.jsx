import React, { Component, PureComponent } from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  // После первого ренденра.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((comments) => {
        this.setState((prevState) => ({
          ...prevState,
          comments: prevState.comments.concat(comments),
        }))
      })
  }

  render() {
    const { comments } = this.state;
    return (
      <CommentsList comments={comments} />
    );
  }
}