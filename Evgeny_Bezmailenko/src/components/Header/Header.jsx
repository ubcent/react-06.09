import './Header.css';

import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const {LogoIcon} = this.props;
        const {SearchIcon} = 'fas fa-search';

        return (
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="text-muted" data-toggle="modal" data-target="#subscribeModal" href="#subscribeModal">Subscribe</a>
                    </div>
                    <div className="col-4 text-center">
                        <a className="blog-header-logo text-dark" href="#"><i className={LogoIcon} /> My REACT blog</a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a className="text-muted" href="#">
                            <i className={SearchIcon} />
                        </a>
                        <a className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm" href="#myModal">Sign up</a>
                    </div>
                </div>
            </header>
        );
      }
}