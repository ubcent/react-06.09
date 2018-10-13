import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './article.css';

export default class Content extends Component {
    render() {
        const {id, title, dat, text} = this.props;
        return (
            <div className="article">
                <Link to={"/article/" + id}>
                    <h3 className="article_title">{title}</h3>
                </Link>
                <em className="article_date">Published: {dat}</em>
                <div className="article_text">{text}</div>
            </div>
        );
    }
}