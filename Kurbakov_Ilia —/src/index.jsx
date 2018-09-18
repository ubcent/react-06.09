import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from 'components/Header';
import Body from 'components/Body';
import './index.css'
import $ from 'jquery';
import Popper from 'popper.js';
import Footer from './components/Footer';


const menu = ['Главная', 'Блог', 'Темы'];

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div class="flex">
                <Header menu={menu}>
                </Header>
                <Body/>
                </div>
                <Footer menu={menu}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));