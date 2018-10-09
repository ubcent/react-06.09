import React, { Component } from 'react';
import { connect } from 'react-redux';

import Article from 'components/article';

class ArticleContainer extends Component {

    componentDidMount() {

    }

    render() {
        const { article } = this.props;
       
        return (
                <Article id={article.id} title={article.title} dat={article.dat} text={article.text} />
        );
    }
}

function mapStateToProps(state, props) {

    const art = [
        {
            'id': 0,
            'title': 'stmple article Zero',
            'dat': '09.08.18',
            'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Hulg',
        },
        {
            'id': 1,
            'title': 'stmple art ONE',
            'dat': '09.08.19',
            'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            'id': 2,
            'title': 'stmple art 4e',
            'dat': '09.08.20',
            'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
    ]

    let article = state.articles.entities;
    
    if (article.length === 0)
        article = art.find((article) => +article.id === +props.match.params.id);
    else
        article = state.articles.entities.find((article) => +article.id === +props.match.params.id);

    return {
        ...props,
        article: article,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);