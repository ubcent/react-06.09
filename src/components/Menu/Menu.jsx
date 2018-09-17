import './Menu.css';

import React from 'react';

// Stateless
export function(props) {
  return (
    <ul>
      {props.items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
    </ul>
  );
}
