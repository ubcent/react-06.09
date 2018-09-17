import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Ivan Sidorov'];

class App extends Component {
    handleClick() {
        console.log('button clicked');
    }

    render() {
        return (
            <div>
                <Header onButtonClick={this.handleClick} size="small" creators={creators}>
                    <div>
                        Hello I'm children of Header!
                    </div>
                </Header>
                Hello world
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));