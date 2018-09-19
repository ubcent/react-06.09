import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import className from 'classnames';

import Header from 'components/Header';
import Login from 'components/Login';
import TopBar from 'components/TopBar';
import Main from 'components/Main';
import Footer from 'components/Footer';

class Layout extends Component {

    render() {
        const menu = ['Home', 'Articles', 'About us', 'Contacts'];
        const LogoIcon = className('fab fa-react');
        return (
            <div>
                <Login />
                <TopBar menu={menu} LogoIcon={LogoIcon}/>
                <Header LogoIcon={LogoIcon}/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(<Layout />, document.getElementById('root'));