import './Header.css';

import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const {LogoIcon} = this.props;
        return (
            <header className='jumbotron' role='banner'>
                <div className='container'>
                    <h1 className='display-3'><i className={LogoIcon} /> My REACT blog</h1>
                </div>
            </header>
        );
      }
}