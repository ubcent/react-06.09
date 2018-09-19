import './Navigation.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

export default class Navigation extends Component {
    static propTypes = {
        menuArray: PropTypes.arrayOf(PropTypes.string)
    };
    static defaultProps = {
        menuArray: ['Home'],
    };

    render() {
        const { menuArray } = this.props;
        const menuClass = className('navbar-nav mr-auto');
        const NavItemClass = className('nav-item');
        const NavLinkClass = className('nav-link');

        return (
            <ul className={menuClass}>
                {menuArray.map((menu, ind) => <li className={NavItemClass} key={ind}>
                    <a className={NavLinkClass} href="#">{menu}</a></li>)}
            </ul>
        );
    }
}