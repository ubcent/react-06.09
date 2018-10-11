import './Comment.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class Comment extends PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { name, body }= this.props;

    return (
      <div className="Comment">
        <h3>{ name }</h3>
        <span> { body } </span>
      </div>
    );
  }
}
