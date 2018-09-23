import './Main.css';

import React, { Component } from 'react';

import Articles from 'components/Articles';
import Aside from 'components/Aside';


export default class Main extends Component {
    render() {
        return (
            <main role="main" className="container">
                <div className="row">
                    <Articles/>
                    <Aside/>
                </div>
            </main>
        );
    }
}