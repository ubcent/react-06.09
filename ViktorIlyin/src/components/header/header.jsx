import React, { Component } from 'react';
import NavMenu from 'components/navmenu';
import LoginBtn from 'components/loginbtn';
import './header.css';

const navLinks = [
    {
        'name': 'main',
        'link': '/',
    },
    {
        'name': 'comments',
        'link': '/comments',
    },
    {
        'name': 'about',
        'link': '/about',
    }
];

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header_content">React Blog
                    <NavMenu navLinks={navLinks} />
                    <LoginBtn />
                </div>
            </header>
        );
    }
}