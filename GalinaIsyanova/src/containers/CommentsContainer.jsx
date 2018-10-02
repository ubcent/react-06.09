import React, { PureComponent } from 'react';
import AllCommentsView from 'components/AllCommentsView';
import { connect } from 'react-redux';
import { load } from 'actions/comments';

class CommentsContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const titleComments = 'Comments in my blog';
        const smallTitleComments = 'You can read post if you click "Read Post"';
        const paginationButtonName = {
            left: 'Older',
            right: 'Newer'
        }
        const { comments } = this.props;

        return (
            <AllCommentsView titleComments={titleComments} smallTitleComments={smallTitleComments}
                paginationButtonName={paginationButtonName} allCommentsArray={comments} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        comments: state.comments.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);

