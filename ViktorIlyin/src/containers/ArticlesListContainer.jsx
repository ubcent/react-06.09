import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlesList from 'components/articlesList';

import { loadArticles } from 'actions/articles';

class ArticleLictContainer extends Component {

    componentDidMount() {
        const { load } = this.props;

        load();
    }

    render() {
        const { articles } = this.props;
        return (
                <ArticlesList articles={articles} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        articles: state.articles.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(loadArticles()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleLictContainer);