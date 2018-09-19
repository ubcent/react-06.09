import './Main.css';

import React, { Component } from 'react';

import Articles from 'components/Articles';

export default class Main extends Component {
    render() {
        return (
            <main role='main'>
                <div className='container'>
                        <Articles/>
                    <hr/>
                </div>
            </main>
        );
    }
}