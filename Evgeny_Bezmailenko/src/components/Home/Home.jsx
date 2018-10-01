import './Home.css';

import React, { Component } from 'react';

import Banner from 'components/Banner';
import PreviewCategory from 'components/PreviewCategory';
import Main from 'components/Main';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Banner/>
                <PreviewCategory/>
                <Main/>
            </div>
        );
    }
}