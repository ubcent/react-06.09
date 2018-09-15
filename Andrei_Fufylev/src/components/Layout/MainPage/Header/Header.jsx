import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
          <div>
            <h1>My first Blog page <Badge color='secondary'>Created with ReactJS</Badge></h1>
          </div>
        );
      }
}