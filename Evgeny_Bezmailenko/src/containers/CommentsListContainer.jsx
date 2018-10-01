import React, { Component } from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const queryParams = urlutils.parse(this.props.location.search, true);
        console.log(queryParams.query);
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                this.setState((prevState) => ({
                    ...prevState,
                    comments: prevState.comments.concat(comments),
                }))
            })
    }

    render() {
        const { comments } = this.state;
        return (
            <CommentsList comments={comments} />
        );
    }
}