import './Menu.css';

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Menu(props) {
  return (
    <ul>
      {props.items.map((item, idx) => <li key={idx}><Link to={item.href}>{item.title}</Link></li>)}
    </ul>
  );
}

export default withRouter(Menu);
