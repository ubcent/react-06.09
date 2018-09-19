import React, { Component } from 'react';

import CommentsSend from 'components/CommentsSend';
import CommentsView from 'components/CommentsView';

export default class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentsUser: [
                {
                    userImageSrc: 'http://placehold.it/50x50',
                    userName: 'Commenter Name',
                    commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                    answerToComments: [],
                }, {
                    userImageSrc: 'http://placehold.it/50x50',
                    userName: 'Commenter Name',
                    commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                    answerToComments: [
                        {
                            userImageSrc: 'http://placehold.it/50x50',
                            userName: 'Commenter Name',
                            commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                            answerToComments: [],
                        }, {
                            userImageSrc: 'http://placehold.it/50x50',
                            userName: 'Commenter Name',
                            commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                            answerToComments: [],
                        }
                    ]
                }
            ],
        };
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
                commentsUser: prevState.commentsUser.concat([myComment])
            }
        });
    }

    render() {
        const { commentsUser } = this.state;

        return (
            <div>
                <CommentsSend onButtonClick={this.handleSend} />
                <CommentsView commentsUser={commentsUser} />
            </div>
        );
    }
}