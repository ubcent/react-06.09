import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleArticle from 'components/SingleArticle';
import { load } from 'actions/posts';

class SingleArticleContainer extends Component {
    componentDidMount() {
        const { load } = this.props;
        load();
    }


    render() {
        const { posts } = this.props;
        console.log(posts);
        return (
            <SingleArticle {...posts} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,

        post: state.posts.entities.find((post) => +post.id === +props.match.params.id),
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticleContainer)