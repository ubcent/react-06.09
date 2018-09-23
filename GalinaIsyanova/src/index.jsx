import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import ModalWelcome from 'components/ModalWelcome';

class App extends Component {
    render() {
        const myFooterContent = 'Copyright © Your Website 2018';
        return (
            <div>
                <Header />
                <Main />
                <Footer footerContent={myFooterContent}/>
                <ModalWelcome />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));