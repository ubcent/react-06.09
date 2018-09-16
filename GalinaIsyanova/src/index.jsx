import './style.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

class Layout extends Component {
    handleClick() {
        console.log('Button click');
    }

    render() {
        const menu = ['Home', 'Blog', 'About', 'Help'];
        const footer = ['® All rights reserved', '2018'];

        return (
            <div>
                <Header menu={menu} />
                <Main />
                <Footer footerContent={footer}/>
            </div>
        );
    }
}

ReactDom.render(<Layout />, document.getElementById('root'));