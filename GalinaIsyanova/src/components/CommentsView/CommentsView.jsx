import React from 'react';
import PropTypes from 'prop-types';
import CommentOneView from 'components/CommentOneView';

export default function CommentsView(props) {
    const { comments } = props;

    return (
        <div>
            {comments.map((commentOne, ind) => <CommentOneView key={ind} {...commentOne} />)}
        </div>
    );
}

CommentsView.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        userImageSrc: PropTypes.string,
        userName: PropTypes.string,
        commentText: PropTypes.string,
        answerToComments: PropTypes.arrayOf(PropTypes.shape({
            userImageSrc: PropTypes.string,
            userName: PropTypes.string,
            commentText: PropTypes.string
        })),
    })),
};

CommentsView.defaultProps = {
    comments: []
};