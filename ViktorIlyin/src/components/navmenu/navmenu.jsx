import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './nav.css';

function Nav(props) {

    let loc = props.location.pathname.slice(1);
    if(loc === '') loc = 'main';

    return (
        <nav>
            <ul>
                {props.navLinks.map((item) => <li key={item.name} className={'nav_item ' + ((item.name === loc)? ' activNav': '')}><Link to={item.link}>{item.name}</Link></li>)}
            </ul>
        </nav>)
}

export default withRouter(Nav);
