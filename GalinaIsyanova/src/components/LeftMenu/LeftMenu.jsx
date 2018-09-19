import './LeftMenu.css';

import React, { Component } from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

export default class LeftMenu extends Component {
    static propTypes = {
        menuArray: PropTypes.arrayOf(PropTypes.string)
    };
    static defaultProps = {
        menuArray: ['Home'],
    };

    render() {
        const { menuArray } = this.props;
        const leftMenuClass = className('left-menu');

        return (
            <ul className={leftMenuClass}>
                {menuArray.map((menu, ind) => <li key={ind}><a href="#">{menu}</a></li>)}
            </ul>
        );
    }
}