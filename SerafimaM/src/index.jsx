import React, { Component, PureComponent } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import {Link, Route, Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header';
import Menu from "./components/Menu";
import Footer from './components/Footer';
import FormComments from './components/FormComments';
import CommentsList from './components/CommentsList';


import routes from './routes';


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
        href: '/Comments'
    },
    {
        label: 'Users',
        href: '/Users'
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
            <div >

                <div ><Header onButtonClick={this.handleClick} size="big">
                    <Menu size='big' menuItems={menuItems}/>
                </Header></div>
                <div className="container">
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>

                  <CommentsList comments={ comments }/>
                    <FormComments onSend={this.handleSend}/>

                </div>

                <div ><Footer/></div>

            </div>


        );

    }

}


ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('app'));

