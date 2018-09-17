import './Header.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// stateful
export default class Header extends Component {
  static propTypes = {
    creators: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
    onButtonClick:  PropTypes.func,
  };

  static defaultProps = {
    size: 'small',
  };

  handleClick(creator) {
    return () => {
      console.log('Clicked', creator);
    }
  }

  render() {
    const { size, creators, children, onButtonClick } = this.props;
    const headerClass = classNames('header', {
      'header--big': size === 'big',
      'header--medium': size === 'medium',
      'header--small': size === 'small',
    });

    return (
      <header className={headerClass}>
        {creators && <h3>Creators:</h3>}
        {creators && <ul>
          {creators.map((creator, idx) => <li key={idx}>
          <button onClick={this.handleClick(creator)}>{creator}</button>
        </li>)}
        </ul>}

        <div>
          Here: 
          {children}
        </div>

        <button onClick={onButtonClick}>Click me</button>
      </header>
    );
  }
}