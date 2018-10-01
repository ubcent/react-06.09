import React, { PureComponent } from 'react';
import AllCommentsView from 'components/AllCommentsView';

export default class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/comments')
            .then((response) => response.json())
            .then((comments) => {
                this.setState((prevState) => ({
                    ...prevState,
                    comments: prevState.comments.concat(comments),
                }))
            });
    }

    render() {
        const titleComments = 'Comments in my blog';
        const smallTitleComments = 'You can read post if you click "Read Post"';
        const paginationButtonName = {
            left: 'Older',
            right: 'Newer'
        }
        const { comments } = this.state;

        return (
            <AllCommentsView titleComments={titleComments} smallTitleComments={smallTitleComments} 
            paginationButtonName={paginationButtonName} allCommentsArray={comments} />
        );
    }
}

