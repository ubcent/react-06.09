import './Footer.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render() {
        return (
            <div className='row text-white bg-secondary p-2'>
                <div className='col-6'>
                    © 2018 Brand All Rights Reserved
                </div>
                <nav className='nav col-6 justify-content-end'>
                    <a href='#' className='nav-link text-white'><i class='fab fa-facebook-f'></i></a>
                    <a href='#' className='nav-link text-white'><i class='fab fa-twitter'></i></a>
                    <a href='#' className='nav-link text-white'><i class='fab fa-linkedin-in'></i></a>
                    <a href='#' className='nav-link text-white'><i class='fab fa-pinterest-p'></i></a>
                    <a href='#' className='nav-link text-white'><i class='fab fa-google-plus-g'></i></a>
                </nav>
            </div>

        );
    }
}