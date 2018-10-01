import React, { Component } from 'react';

import SingleArticle from 'components/SingleArticle';

export default class SingleArticleContainer extends Component {
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
            <SingleArticle posts={posts} />
        );
    }
}