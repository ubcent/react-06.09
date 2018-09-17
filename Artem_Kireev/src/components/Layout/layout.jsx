import proptypes from 'prop-types';
import React, { Component } from 'react';

export default class Layout extends Component {
  static propTypes = {
    menu: proptypes.arrayOf(proptypes.string).isRequired,
    blogs: proptypes.arrayOf(proptypes.string)
  }

  render() {
    const { menu , blogs } = this.props;

    return (
      <header>
        {menu.length ? <h3>Меню:</h3> : ''}
        {menu.length ? <ul>{menu.map((item, idx) => <a href="#" key = {idx}><li key = {idx}>{item}</li></a>)}
        </ul>: ''}
        <button>Login</button>
        <div>
        {blogs.length ? <h2>Блоги:</h2> : ''}
        {blogs.length ? <ul>{blogs.map((item,idx) => <li key = {idx}>{item}</li>)}</ul>: ''}
        </div>
      </header>
    )
  }
} 