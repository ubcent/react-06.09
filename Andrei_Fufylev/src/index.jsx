import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './components/Layout/MainPage/Style.css';

import Header from 'components/Layout/MainPage/Header';
import Login from 'components/Layout/MainPage/Login';
import Menu from 'components/Layout/MainPage/Menu';
import Articles from 'components/Layout/MainPage/Articles';
import Footer from 'components/Layout/MainPage/Footer';

class App extends Component {

    render() {
        return (
            <div className='wrapper'>
                <div className='container'>
                
                    <div className='row'>
                        <div className='col-12'>
                            <Header />
                        </div>

                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-8'>
                            <Menu />
                        </div>
                        <div className='col-4 text-right'>
                            <Login buttonLabel='Login'></Login>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <Articles />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>

        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));