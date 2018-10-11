import './Footer.css';

import React, { Component } from 'react';
import classNames from 'classnames';



export default class Footer extends Component {
    render() {
        const footerClass = classNames('footer');
        return (
            <footer className={`footerClass`}>
                <div className="container">
                    Copyright © 2018 All Rights Reserved
                </div>
                <nav className="nav">

                </nav>
            </footer>

        );
    }
}