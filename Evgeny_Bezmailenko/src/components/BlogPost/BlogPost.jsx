import './BlogPost.css';

import React, { Component } from 'react';

import SingleArticleContainer from 'containers/SingleArticleContainer';
import Aside from 'components/Aside';

export default class BlogPost extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <main role="main" className="container">
                <div className="row">
                <SingleArticleContainer/>
                <Aside/>
                </div>
            </main>
        );
    }
}