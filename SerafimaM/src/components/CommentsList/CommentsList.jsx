import './CommentsList.css';
import React, { Component, PureComponent } from 'react';

import { Link } from 'react-router-dom';

export default class CommentsList extends PureComponent {
    render() {
        return (
            <div>
                <h4>Comments</h4>

                <ul>{this.props.comments.map((comment, idx) => <li key={idx}>{comment.username}:{comment.message}
                </li>)} </ul>


            </div>
        );
    }
}
