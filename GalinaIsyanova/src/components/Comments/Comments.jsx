import React, { PureComponent } from 'react';
import CommentsSend from 'components/CommentsSend';
import CommentsView from 'components/CommentsView';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Comments extends PureComponent {
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

            fetch(`http://localhost:3000/postsInfoArray/${this.props.match.params.id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comments: prevState.comments.concat([myComment]) }),
            });

            return {
                ...prevState,
                comments: prevState.comments.concat([myComment])
            }
        });

        fetch('http://localhost:3000/comments')
            .then((response) => response.json())
            .then((comments) => {
                const id = comments.pop().id + 1;
                const { postTitle } = this.props;
                const { pathname } = this.props.location;
                const newComment = {
                    id: id,
                    postTitle: postTitle,
                    fullPageRef: pathname,
                    userImageSrc: 'http://placehold.it/50x50',
                    userName: 'Commenter Name',
                    commentText: document.getElementById('commentText').value,
                    answerToComments: [],
                };

                fetch('http://localhost:3000/comments', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newComment),
                });

            });
    }

    componentWillReceiveProps(newProps) {
        this.setState((prevState) => {
            const { comments } = newProps;
            return {
                ...prevState,
                comments: comments
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

export default withRouter(Comments);