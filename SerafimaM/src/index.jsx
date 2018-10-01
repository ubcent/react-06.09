import React, { Component, PureComponent } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Menu from "./components/Menu";
import Articles from "./components/Articles";
import Footer from './components/Footer';
import Form from './components/Form';

const menuItems = [{
    label: 'Home',
    href: '/'
},
    {
        label: 'Blog',
        href: '/new'
    },
    {
        label: 'Comments',
        href: '/new'
    },
    {
        label: 'Users',
        href: '/new'
    },
];


class App extends PureComponent {
    handleClick(Login) {

        return () => {
            console.log('Clicked', Login);
        }


    }

    constructor(props) {
        super(props);

        this.state = {
            comments: [],

        };
    }

    handleSend = (comment) => {
       const { comments } = this.state;
       comments.push(comment);

       this.setState({ comments: comments.concat([comment]) });
    };

    render() {
        const {comments} = this.state;

        return (
            <div>
                <div><Header onButtonClick={this.handleClick} size="big">
                    <Menu size='big' menuItems={menuItems}/>
                </Header></div>
                <div><Articles/>
                    <ul>{comments.map((comment, idx) => <li key={idx}>{comment.username}:{comment.message}
                    </li>)} </ul>
                    <Form onSend={this.handleSend}/></div>

                <div><Footer/></div>

            </div>


        );

    }
}


ReactDom.render(<App/>, document.getElementById('app'));

