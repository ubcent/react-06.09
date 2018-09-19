import './Footer.css';

import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className='navbar navbar-expand-md navbar-dark bg-dark p-3' role='contentinfo'>
                <div className='container'>
                <p className='text-white my-2 my-sm-0'>&copy; REACT blog 2018, All rights reserved</p>
            </div>
            </footer>
        );
    }
}