import React, { Component } from 'react';
import Article from 'components/article';
import './content.css';

// const articlesList = [
//     {
//         'id': 0,
//         'title': 'stmple article Zero',
//         'dat': '09.08.18',
//         'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         'id': 1,
//         'title': 'stmple art ONE',
//         'dat': '09.08.19',
//         'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         'id': 2,
//         'title': 'stmple art 4e',
//         'dat': '09.08.20',
//         'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     },
// ]

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {artId: this.props.artId};
    }

    showArt(id) {
        this.setState({artId: id});
    }

    render() {
        const {articlesList} = this.props;
        const artId = this.state.artId;
        let output;
        console.log(artId);
        if(artId == 'all')
        {
            output = (
            <div className="content">
                <center>
                    <h1 className="main_h1">React JS Blog</h1>
                </center>
                {articlesList.slice(0).reverse().map((art) => <Article key={art.id} id={art.id} title={art.title} dat={art.dat} text={art.text} goTo={() => this.showArt(art.id)} />)}
            </div>);
        }
        else
        {
            output = (
                <div className="content">
                    <center>
                        <h1 className="main_h1">React JS Blog</h1>
                    </center>
                    {<Article id={artId} title={articlesList[artId].title} dat={articlesList[artId].dat} text={articlesList[artId].text} />}
                </div>);
        }

        return output;
    }
}