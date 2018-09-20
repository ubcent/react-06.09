import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

ReactDom.render(<Layout />, document.getElementById('app'));