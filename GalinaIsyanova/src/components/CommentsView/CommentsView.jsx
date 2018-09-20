import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentOneView from 'components/CommentOneView';

export default class CommentsView extends Component {
    static propTypes = {
        commentsUser: PropTypes.arrayOf(
            PropTypes.shape({
                userImageSrc: PropTypes.string,
                userName: PropTypes.string,
                commentText: PropTypes.string,
                answerToComments: PropTypes.arrayOf(PropTypes.shape({
                    userImageSrc: PropTypes.string,
                    userName: PropTypes.string,
                    commentText: PropTypes.string
                }))
            })
        ),
    };

    static defaultProps = {
        commentsUser: []
    };
    
    render() {
        const { commentsUser } = this.props;

        return (
            <div>
                {commentsUser.map((commentOneUser, ind) => <CommentOneView key={ind} oneComment={commentOneUser} />)}
            </div>
        );  
    }
}