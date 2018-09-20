import React, { Component } from 'react';
import Article from 'components/article';
import './content.css';

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

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <center>
                    <h1 className="main_h1">React JS Blog</h1>
                </center>
                {articlesList.slice(0).reverse().map((art) => <Article key={art.id} id={art.id} title={art.title} dat={art.dat} text={art.text} />)}
            </div>
        );
    }
}