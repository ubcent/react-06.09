import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

export default function Footer(props) {
    const { footerContent } = props;
    const footerClass = className('py-5 bg-dark navbar-fixed-bottom');
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

Footer.propTypes = {
    footerContent: PropTypes.string,
};

Footer.defaultProps = {
    footerContent: ['® All rights reserved']
};