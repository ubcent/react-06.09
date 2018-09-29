import './Comment.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { name, body } = this.props;
    return (
      <div className="Comment">
        <h2>{name}</h2>
        <p>{body}</p>
      </div>
    );
  }
}
