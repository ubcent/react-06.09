import React, { Component } from 'react';

export default class NavMenu extends Component {
    render() {
        const {navLinks} = this.props;
        return (
            <nav>
                <ul>
                    {navLinks.map((link) => <li key={link.name}><a href={link.link}>{link.name}</a></li>)}
                </ul>
            </nav>
        );
    }
}