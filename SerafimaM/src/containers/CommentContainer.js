import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

import Comment from '/components/FormComment';
import { load } from '/action/comment';

class CommentContainer extends Component {

    componentDidMount() {
        const { load } = this.props;

        load();
    }

    render() {
        const { comment } = this.props;
        return (
            <Comment {...comment} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        comment: state.comments.entities.find((comment) => +comment.id === +props.match.params.id),
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)