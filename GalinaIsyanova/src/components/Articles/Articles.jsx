import './Articles.css';

import React, { Component } from 'react';
import className from 'classnames';

export default class Articles extends Component {

    render() {
        const articlesClass = className('articles');

        return (
            <div className={articlesClass}>
                Place for main content
            </div>
        );
    }
}