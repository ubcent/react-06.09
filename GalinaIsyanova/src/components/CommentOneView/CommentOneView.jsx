import React, { PureComponent } from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';
import CommentsView from 'components/CommentsView';

export default class CommentOneView extends PureComponent {
    static propTypes = {
        userImageSrc: PropTypes.string,
        userName: PropTypes.string,
        commentText: PropTypes.string,
        answerToComments: PropTypes.arrayOf(PropTypes.shape({
            userImageSrc: PropTypes.string,
            userName: PropTypes.string,
            commentText: PropTypes.string,
        }))
    };

    static defaultProps = {
        userImageSrc: '',
        userName: '',
        commentText: '',
        answerToComments: [],
    };

    renderOneCommentsWithReply(userImageSrc, userName, commentText, answerToComments) {
        return (
            <div>
                <Media className="my-4">
                    <Media left href="#">
                        <Media object src={userImageSrc} className="mr-3 rounded-circle" />
                    </Media>
                    <Media body>
                        <Media heading>{userName}</Media>
                        {commentText}
                        <CommentsView comments={answerToComments} />
                    </Media>
                </Media>
            </div>
        );
    }

    renderOneCommentsWithoutReply(userImageSrc, userName, commentText) {
        return (
            <div>
                <Media className="my-4">
                    <Media left href="#">
                        <Media object src={userImageSrc} className="mr-3 rounded-circle" />
                    </Media>
                    <Media body>
                        <Media heading>{userName}</Media>
                        {commentText}
                    </Media>
                </Media>
            </div>
        );
    }

    render() {
        const { userImageSrc, userName, commentText, answerToComments } = this.props;
        if (answerToComments.length) {
            return this.renderOneCommentsWithReply(userImageSrc, userName, commentText, answerToComments);
        } else {
            return this.renderOneCommentsWithoutReply(userImageSrc, userName, commentText);
        }
    }
}