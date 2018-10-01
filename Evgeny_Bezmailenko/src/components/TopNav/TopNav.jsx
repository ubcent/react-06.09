import './TopNav.css';

import React from 'react';
import { Link } from  'react-router-dom';
import className from 'classnames';

export default function TopNav(props) {
        const menuClass = className('nav d-flex justify-content-between');
        const NavItemClass = className('nav-item');
        const NavLinkClass = className('p-2 text-muted');

        return (
            <div className="nav-scroller py-1 mb-2">
                <nav>
                    <ul className={menuClass}>
                        {props.items.map((item, ind) => <li className={NavItemClass} key={ind}><Link className={NavLinkClass} to={item.href}>{item.title}</Link></li>)}
                    </ul>
                </nav>
            </div>
        );
}