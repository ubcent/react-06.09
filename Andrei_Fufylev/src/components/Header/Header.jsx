import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default class Header extends Component {

    static PropTypes = {
        creators: PropTypes.arrayOf(PropTypes.string).isRequired,
        size: PropTypes.oneOf(['small', 'medium', 'big']),
        onButtonClick: PropTypes.func,
    };

    static defaultProps = {
        size: 'small',
    };

    /*handleClick(creator) {
        return () => {
            console.log('Clicked', creator);
        }
        
    }*/

    render() {
        const { children } =this.props;

        const headerClass = classNames('header', {
            
        });

        return (
            <header className=''>
                <h3 className='row'>Blog page created on ReactJS</h3>
            </header>
        );
    }
}