import React from 'react';
import className from 'classnames';
import Menu from 'components/Menu';
import PropTypes from 'prop-types';

export default function Header(props) {
    const headerClass = className('bg-dark');
    const headerClassInside = className('container');
    const { indexActive, menu, brand }  = props;

    return (
        <header className={headerClass}>
            <div className={headerClassInside}>
                <Menu brand={brand} menuArray={menu} indexActive={indexActive}/>
            </div>
        </header>
    );
}

Header.propTypes = {
    indexActive:PropTypes.number,
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
    indexActive: -1,
    menu: [],
    brand: {},
}