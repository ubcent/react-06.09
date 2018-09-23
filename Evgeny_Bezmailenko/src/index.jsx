import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'holderjs/holder.min';
import './style.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import className from 'classnames';

import Login from 'components/Login';
import Subscribe from 'components/Subscribe';
import Header from 'components/Header';
import TopNav from 'components/TopNav';
import Banner from 'components/Banner';
import PreviewCategory from 'components/PreviewCategory';
import Main from 'components/Main';
import Footer from 'components/Footer';

class Layout extends Component {

    render() {

        const LogoIcon = className('fab fa-react');
        return (
            <div className="container">
                <Login />
                <Subscribe />
                <Header LogoIcon={LogoIcon}/>
                <TopNav />
                <Banner/>
                <PreviewCategory/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(<Layout />, document.getElementById('root'));
