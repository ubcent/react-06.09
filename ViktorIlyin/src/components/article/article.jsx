import React, { Component } from 'react';
import './article.css';

export default class Content extends Component {
    render() {
        const {id, title, dat, text} = this.props;
        return (
            <div className="article">
                <h3 className="article_title" onClick={() => this.props.goTo()}>{title}</h3>
                <em className="article_date">Published: {dat}</em>
                <div className="article_text">{text}</div>
            </div>
        );
    }
}