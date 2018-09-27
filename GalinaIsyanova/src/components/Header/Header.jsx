import React from 'react';
import Menu from 'components/Menu';
import PropTypes from 'prop-types';

export default function Header(props) {
    const { menu, brand }  = props;

    return (
        <header className="bg-dark">
            <div className="container">
                <Menu brand={brand} menuArray={menu} />
            </div>
        </header>
    );
}

Header.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        src: PropTypes.string,
    })),
    brand: PropTypes.shape({
        text: PropTypes.string,
        src: PropTypes.string,
    }),
};


Header.defaultProps = {
    menu: [],
    brand: {},
}