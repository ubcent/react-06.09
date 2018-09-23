import './TopNav.css';

import React, { Component } from 'react';
import className from 'classnames';

export default class TopNav extends Component {

    render() {
        const menuArray = ['World',
            'U.S.',
            'Technology',
            'Design',
            'Culture',
            'Business',
            'Politics',
            'Opinion',
            'Science',
            'Health',
            'Style',
            'Travel'
        ];
        const menuClass = className('nav d-flex justify-content-between');
        const NavItemClass = className('nav-item');
        const NavLinkClass = className('p-2 text-muted');

        return (
            <div className="nav-scroller py-1 mb-2">
                <nav>
                    <ul className={menuClass}>
                        {menuArray.map((item, ind) => <li className={NavItemClass} key={ind}><a className={NavLinkClass} href="#">{item}</a></li>)}
                    </ul>
                </nav>
            </div>
        );
    }
}