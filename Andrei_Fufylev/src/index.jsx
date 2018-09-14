import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header'

const creators =['Vasya Pupkin', 'Andrei Fufylev', 'Dmitrii Bondarchuk'];

class App extends Component {
    handleClick() {
        console.log('button click');
    }
    render() {
        return (
            <div>
                <Header onButtonClick={this.handleClick} size='small' creators={creators}>
                <div>
                    Hello, I'm a child of Header
                </div>
                </Header>
        
                Hello world!!!
                </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));