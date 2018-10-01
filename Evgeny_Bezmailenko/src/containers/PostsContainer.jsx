import React, { Component } from 'react';

import Articles from 'components/Articles';

export default class PostsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch('/src/posts.json')
            .then((response) => response.json())
            .then((posts) => {
                this.setState((prevState) => ({
                    ...prevState,
                    posts: prevState.posts.concat(posts),
                }))
            })
    }

    render() {
        const { posts } = this.state;
        return (
            <Articles posts={posts} />
        );
    }
}