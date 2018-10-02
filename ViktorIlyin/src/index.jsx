import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';

const articlesList = [
    {
        'id': 0,
        'title': 'stmple article Zero',
        'dat': '09.08.18',
        'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        'id': 1,
        'title': 'stmple art ONE',
        'dat': '09.08.19',
        'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        'id': 2,
        'title': 'stmple art 4e',
        'dat': '09.08.20',
        'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
]

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Content articlesList={articlesList} artId={'all'} />
                <Footer />
            </div>
        );
    }
}

ReactDom.render(<Layout />, document.getElementById('app'));