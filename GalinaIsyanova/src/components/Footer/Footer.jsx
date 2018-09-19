import './Footer.css';

import React, { Component } from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    static propTypes = {
        footerContent: PropTypes.arrayOf(PropTypes.string),
    };
    static defaultProps = {
        footerContent: ['® All rights reserved']
    };

    render() {
        const { footerContent } = this.props;
        const footerClass = className('footer');

        return (
            <footer className={footerClass}>
                <div>{footerContent.map((footerItem, ind) => <div key={ind}>{footerItem}</div>)}</div>
            </footer>
        );
    }
}