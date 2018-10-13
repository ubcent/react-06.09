import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentsList from 'components/CommentsList';
import { load } from 'actions/comments';

class CommentsListContainer extends Component {

    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const { comments } = this.props;
        return (
            <CommentsList comments={comments} />
        );
    }
}

function mapStateToProps(state, props) {
  const match = props.id;

    return {
        ...props,
      comments: state.comments.entities.filter((elem) => elem.postId === match),
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);