import React, { Component } from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';
import CommentsView from 'components/CommentsView';

export default class CommentOneView extends Component {
    static propTypes = {
        oneComment: PropTypes.shape({
                userImageSrc: PropTypes.string,
                userName: PropTypes.string,
                commentText: PropTypes.string,
                answerToComments: PropTypes.arrayOf(PropTypes.shape({
                    userImageSrc: PropTypes.string,
                    userName: PropTypes.string,
                    commentText: PropTypes.string
                }))
            }
        ),
    };

    static defaultProps = {
        commentsUser: []
    };
    
    render() {
        const { oneComment } = this.props;
        if (oneComment.answerToComments.length) {
            return (
                <div>
                    <Media className="my-4">
                        <Media left href="#">
                            <Media object src={oneComment.userImageSrc} className="mr-3 rounded-circle" />
                        </Media>
                        <Media body>
                            <Media heading>{oneComment.userName}</Media>
                            {oneComment.commentText}
                            <CommentsView commentsUser={oneComment.answerToComments}/>
                        </Media>
                    </Media>
                </div>
            );
        } else {
            return (<div>
                <Media className="my-4">
                    <Media left href="#">
                        <Media object src={oneComment.userImageSrc} className="mr-3 rounded-circle" />
                    </Media>
                    <Media body>
                        <Media heading>{oneComment.userName}</Media>
                        {oneComment.commentText}
                    </Media>
                </Media>
            </div>
            );
        }  
    }
}