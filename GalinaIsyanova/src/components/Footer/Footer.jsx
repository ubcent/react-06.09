import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(props) {
    const { footerContent } = props;

    return (
        <footer className="py-5 bg-dark navbar-fixed-bottom">
            <div className="container">
                <p className="m-0 text-center text-white">{footerContent}</p>
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