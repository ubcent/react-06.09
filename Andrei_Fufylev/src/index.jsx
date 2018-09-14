import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './components/Style.css';

import Header from 'components/Header';
import Login from 'components/Login';
import Menu from 'components/Menu';

//const creators =['Vasya Pupkin', 'Andrei Fufylev', 'Dmitrii Bondarchuk'];
const menuItems = [
    {
        title: 'Home',
        href: '#',
        itemClass: 'nav-item',
        linkClass: 'nav-link active'
    },
    {
        title: 'Articles',
        href: '#',
        itemClass: 'nav-item',
        linkClass: 'nav-link'
    },
    {
        title: 'Blog',
        href: '#',
        itemClass: 'nav-item',
        linkClass: 'nav-link'
    },
    {
        title: 'Contacts',
        href: '#',
        itemClass: 'nav-item',
        linkClass: 'nav-link disabled'
    },
];

class App extends Component {
    
    render() {
        return (
            <div className='wrapper'>
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <Header></Header>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-8">
                            <Menu menuItems={menuItems}></Menu>
                        </div>
                        <div className="col-4 text-right">
                            <Login></Login>
                        </div>
                    </div>
                    <hr />
                    <div className="row"></div>
                </div>
            </div>
            
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));