import React, { Component } from 'react';
import className from 'classnames';
import Menu from 'components/Menu';

export default class Header extends Component {
    render() {
        const headerClass = className('bg-dark');
        const headerClassInside = className('container');
        const myMenu = ['Home', 'About', 'Services', 'Contact'];
        const myBrand = 'Start Bootstrap';

        return (
            <header className={headerClass}>
                <div className={headerClassInside}> 
                    <Menu brand={myBrand} menuArray={myMenu} />
                </div>   
            </header>    
        );
    }
}