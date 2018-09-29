import './Header.css';
import React, {Component} from 'react';
import classNames from 'classnames';

export default class Header extends Component {

    render() {
        const {menu} = this.props;
        const headerClass = classNames('header_menu');
        return (
            <header className={headerClass}>
                <ul>
                    {menu.map((element, idx) => <li key={idx}><a href='#'>{element}</a></li>)}
                </ul>
            </header>
        );
    }
}