import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Layout from 'components/Layout'

const menu = ['Главная','К блогам','Логин'];
const blogs = ['lorem','ipsum','lorem'];

class App extends Component{
    render() { return(
        <Layout menu = {menu} blogs = {blogs}/>
    )
    }
}

ReactDom.render(<App />, document.getElementById('root'));