import React, { Component, PureComponent } from 'react';
import urlutils from 'url';
import Comment from 'components/Comment';

export default class CommentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {},
    };
  }

  // После первого ренденра.
  componentDidMount() {
    const { match } = this.props;
    const queryParams = urlutils.parse(this.props.location.search, true);
    console.log(queryParams.query);
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((comment) => {
        this.setState((prevState) => ({
          ...prevState,
          comment,
        }))
      })
  }

  render() {
    const { comment } = this.state;
    return (
      <Comment {...comment} />
    );
  }
}