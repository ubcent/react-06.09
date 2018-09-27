import React, { PureComponent } from 'react';
import ListArticles from 'components/ListArticles';

export default class ListArticlesContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/postsInfoArray')
            .then((response) => response.json())
            .then((posts) => {
                this.setState((prevState) => ({
                    ...prevState,
                    posts: prevState.posts.concat(posts),
                }))
            });
    }

    render() {
        const titleList = 'Read article from my blog';
        const smallTitleList = 'You can read each post more detailed if you click "Read More"';
        const paginationButtonName = {
            left: 'Older',
            right: 'Newer'
        }
        const { posts } = this.state;

        return (
            <ListArticles titleList={titleList} smallTitleList={smallTitleList} paginationButtonName={paginationButtonName} postsInfoArray={posts} />
        );
    }
}

