import React, { Component } from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    static propTypes = {
        footerContent: PropTypes.string,
    };
    static defaultProps = {
        footerContent: ['® All rights reserved']
    };

    render() {
        const { footerContent } = this.props;
        const footerClass = className('py-5 bg-dark');
        const footerClassInside = className('container');
        const textClassName = className('m-0 text-center text-white');

        return (
            <footer className={footerClass}>
                <div className={footerClassInside}>
                    <p className={textClassName}>{footerContent}</p>
                </div>
            </footer>
        );
    }
}