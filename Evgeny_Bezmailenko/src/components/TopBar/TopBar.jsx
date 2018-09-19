import './TopBar.css';

import React, { Component } from 'react';
import className from 'classnames';

import Navigation from 'components/Navigation';
import SearchForm from 'components/SearchForm';


export default class TopBar extends Component {
    render() {
        const {menu} = this.props;
        const {LogoIcon} = this.props;
        const TopBarClass = className('navbar navbar-expand-md navbar-dark fixed-top bg-dark');
        const LoginBtn = className('btn btn-outline-light bg-transparent text-white my-2 my-sm-0');
        const Brand = className('navbar-brand');


        return (
            <nav className={TopBarClass}>
                <a className={Brand} href='#'><i className={LogoIcon} /> REACT blog</a>
                <Navigation menuArray={menu} />
                <SearchForm/>
                <a href='#myModal' className={LoginBtn}
                   data-toggle='modal' data-target='.bd-example-modal-sm'>SIGN UP or SIGN IN</a>
            </nav>
        );
    }
}