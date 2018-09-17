import './Main.css';

import React, { Component } from 'react';
import className from 'classnames';
import LeftMenu from 'components/LeftMenu';
import Articles from 'components/Articles';

export default class Main extends Component {
    render() {
        const mainClass = className('main');
        const menu = ['Home', 'Blog', 'About', 'Help'];

        return (
            <main className={mainClass}>
                <LeftMenu menuArray={menu}/>
                <Articles />
            </main>
        );
    }
}