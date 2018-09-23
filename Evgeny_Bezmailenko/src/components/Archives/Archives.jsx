import './Archives.css';

import React, { Component } from 'react';
import className from 'classnames';

export default class TopNav extends Component {

    render() {
        const menuArray = [
            'March 2014',
            'February 2014',
            'January 2014',
            'December 2013',
            'November 2013',
            'October 2013',
            'September 2013',
            'August 2013',
            'July 2013',
            'June 2013',
            'May 2013',
            'April 2013'
        ];
        const menuClass = className('list-unstyled mb-0');

        return (
            <div className="p-3">
            <h4 className="font-italic">Archives</h4>
                    <ol className={menuClass}>
                        {menuArray.map((item, ind) => <li key={ind}><a href="#">{item}</a></li>)}
                    </ol>
            </div>
        );
    }
}