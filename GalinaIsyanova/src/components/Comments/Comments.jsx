import React, { PureComponent } from 'react';
import CommentsSend from 'components/CommentsSend';
import CommentsView from 'components/CommentsView';
import PropTypes from 'prop-types';

export default class Comments extends PureComponent {
    static propTypes = {
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
    static defaultProps = {
        comments: [],
    };

    constructor(props) {
        super(props);
        const { comments } = props;

        this.state = { comments };
    }

    handleSend = () => {
        this.setState((prevState) => {
            const myComment = {
                userImageSrc: 'http://placehold.it/50x50',
                userName: 'Commenter Name',
                commentText: document.getElementById('commentText').value,
                answerToComments: [],
            };
            return {
                ...prevState,
                comments: prevState.comments.concat([myComment])
            }
        });
    }

    render() {
        const { comments } = this.state;

        return (
            <div>
                <CommentsSend onButtonClick={this.handleSend} />
                <CommentsView comments={comments} />
            </div>
        );
    }
}