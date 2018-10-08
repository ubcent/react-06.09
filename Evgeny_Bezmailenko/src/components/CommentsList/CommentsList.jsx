import React, { Component } from 'react';

export default class CommentsList extends Component {

    render() {
        return (
            <div>
            <h4>Comments</h4>
                <hr/>
            <ul className="nav">
                {this.props.comments.map((comment) => <li key={comment.id}><span className="font-weight-bold">{comment.name}:</span> <p>{comment.body}</p></li>)}
            </ul>
            </div>
        );
    }
}