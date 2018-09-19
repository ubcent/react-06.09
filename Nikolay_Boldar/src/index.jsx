import React, {Component} from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import propTypes from 'prop-types';
import Header from 'components/Header';
import 'semantic-ui-css/semantic.css';
import GridLayout from 'components/Grid/Grid';

class App extends Component {
    render() {
        return (
            <div>
                <GridLayout/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('#root'));