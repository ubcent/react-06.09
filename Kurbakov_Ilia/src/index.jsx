import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Ivan Sidorov'];

class App extends Component {
    render() {
        return (
            <div>
                <Header size='big' creators={creators}>
                    <div>Hello i Header</div>
                </Header>
                Hello world
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));