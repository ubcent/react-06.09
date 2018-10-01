import './Menu.css';

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default class Menu extends Component {


    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({href: PropTypes.string, label: PropTypes.string})
        ).isRequired,
        size: PropTypes.oneOf(['big', 'small']),
    };

    static defaultProps = {
        size: 'small',
        items: []
    };

    render() {
        const {size, menuItems, children} = this.props;
        const menuClass = classNames('menu', {
            'menu-big': size === 'big',
            'menu-small': size === 'small',
        });
        return (
            <menu className={`menuClass`}>

                {menuItems && <ul className = {menuClass}>
                    {menuItems.map((menu, idx) => <li key = {idx}>
                        <a href={menu.href}> {menu.label} </a></li>)}
                </ul>}
                <div>{children}</div>
            </menu>
        );
    }
};