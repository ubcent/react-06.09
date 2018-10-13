import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleArticle from 'components/SingleArticle';
import { load } from 'actions/posts';

class SingleArticleContainer extends Component {
  componentDidMount() {
    const { load } = this.props;

    load();
  }

  render() {
    const { post } = this.props;
    return (
      <SingleArticle {...post}/>
    );
  }
}

function mapStateToProps(state, props) {
  const match = props.match.params.id;

  return {
    ...props,
    post: state.posts.entities.find((post) => post._id === match),

  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => dispatch(load()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticleContainer)