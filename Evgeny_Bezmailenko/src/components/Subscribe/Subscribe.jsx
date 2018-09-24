import './Subscribe.css';

import React, { Component } from 'react';

export default class Subscribe extends Component {
    render() {

        return (
            <div id="subscribeModal" className="modal fade bd-example-modal-sm">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">SUBSCRIBE</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby='emailHelp' placeholder='Enter email' />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your
                                        email with anyone else.
                                    </small>
                                </div>
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}