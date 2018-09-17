import './Menu.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

export default class Menu extends Component {
    static propTypes = {
        menuArray: PropTypes.arrayOf(PropTypes.string)
    };
    static defaultProps = {
        menuArray: ['Home'],
    };

    render() {
        const { menuArray } = this.props;
        const menuClass = className('header__menu');

        return (
            <ul className={menuClass}>
                {menuArray.map((menu, ind) => <li key={ind}><a href="#">{menu}</a></li>)}
            </ul>
        );
    }
}