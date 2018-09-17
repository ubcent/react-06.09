import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/header';
import Content from 'components/content';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

ReactDom.render(<Layout />, document.getElementById('app'));