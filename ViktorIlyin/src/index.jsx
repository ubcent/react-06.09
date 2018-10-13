import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import { Provider } from 'react-redux';

import store from './store';

import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';
import ArticleContainer from 'containers/ArticleContainer';



class About extends Component {
    render() {
        return (
            <h1> About </h1>
        )
    }
}

class Comments extends Component {
    render() {
        return (
            <h1> Comments </h1>
        )
    }
}


class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" component={Content} exact />
                    <Route path="/comments" component={Comments} exact />
                    <Route path="/article/:id" component={ArticleContainer} exact />
                    <Route path="/about" component={About} exact />
                </Switch>
                <Footer />
            </div>
        );
    }
}

ReactDom.render(
    <Provider store={store}><BrowserRouter><Layout /></BrowserRouter></Provider>, 
    document.getElementById('app')
);