import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'holderjs/holder.min';
import './style.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';


import Login from 'components/Login';
import Subscribe from 'components/Subscribe';
import Header from 'components/Header';
import TopNav from 'components/TopNav';
import Footer from 'components/Footer';

import className from 'classnames';

const menuArray = [
    { href: '/', title: 'Home' },
    { href: '/posts', title: 'World' },
    { href: '/posts', title: 'U.S.' },
    { href: '/posts', title: 'Technology' },
    { href: '/posts', title: 'Design' },
    { href: '/posts', title: 'Culture' },
    { href: '/posts', title: 'Business' },
    { href: '/posts', title: 'Politics' },
    { href: '/posts', title: 'Opinion' },
    { href: '/posts', title: 'Science' },
    { href: '/posts', title: 'Health' },
    { href: '/posts', title: 'Style' },
    { href: '/posts', title: 'Travel' },
];

class Layout extends Component {
    constructor() {
        super();
    }

    render() {
        const LogoIcon = className('fab fa-react');
        return (
            <div className="container">
                <Login />
                <Subscribe />
                <Header LogoIcon={LogoIcon}/>
                <TopNav items={menuArray}/>
                <Switch>
                    {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(
    <BrowserRouter><Layout /></BrowserRouter>,
    document.getElementById('root')
);
