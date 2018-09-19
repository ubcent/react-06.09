import React, { Component } from 'react';
import NavMenu from 'components/navmenu';
import LoginBtn from 'components/loginbtn';

const navLinks = [
    {
        'name': 'main',
        'link': '/index.html'
    }
];

export default class Header extends Component {
    render() {
        return (
            <header>
                This is Header!
                <NavMenu navLinks={navLinks} />
                <LoginBtn />
            </header>
        );
    }
}