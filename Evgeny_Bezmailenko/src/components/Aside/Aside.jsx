import './Aside.css';

import React, { Component } from 'react';

import Archives from 'components/Archives';


export default class Aside extends Component {
    render() {
        return (
            <aside className="col-md-4 blog-sidebar">
                        <div className="p-3 mb-3 bg-light rounded">
                            <h4 className="font-italic">About</h4>
                            <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
                                consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        </div>
                        <Archives/>
                        <div className="p-3">
                            <h4 className="font-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ol>
                        </div>
                    </aside>
        );
    }
}