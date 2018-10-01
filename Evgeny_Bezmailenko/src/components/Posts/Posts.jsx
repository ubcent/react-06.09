import './Posts.css';

import React, { Component } from 'react';

import Main from 'components/Main';

export default class Posts extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Main/>
            </div>
        );
    }
}