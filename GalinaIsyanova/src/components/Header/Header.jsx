import './Header.css';

import React, { Component } from 'react';
import className from 'classnames';
import Menu from 'components/Menu';
import Login from 'components/Login';

export default class Header extends Component {
    render() {
        const { menu } = this.props;
        const headerClass = className('header');

        return (
            <header className={headerClass}>
                <div className="welcome">Welcome!</div>
                <Menu menuArray={menu} />
                <Login />
            </header>
        );
    }
}