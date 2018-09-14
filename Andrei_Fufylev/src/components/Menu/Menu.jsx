import './Menu.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default class Menu extends Component {
    render() {
        let items = this.props.menuItems.map((item, idx) => {
            return (
                <li key={idx} className={item.itemClass}>
                    <a href={item.href} className={item.linkClass}>{item.title}</a>
                </li>
            );
        });

        return (
            <div className=''>              
                <ul className='nav'>
                    {items}
                </ul>
            </div>
        );
    }
}