import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Articles extends Component {
    render() {
        return (
            <div className="col-md-8 blog-main">
                <h3 className="pb-3 mb-4 font-italic border-bottom">From the Firehose</h3>

                {this.props.posts.map((post) =>
                    <div className="blog-post" key={post.id}>
                    <Link className="blog-post-title" to={`/posts/${post._id}`}><h2 className="blog-post-title">{post.title}</h2></Link>
                        <p className="blog-post-meta">{post.date} by <a href="#">hkgjhgk</a></p>
                        {post.preview}</div>)}

                <nav className="blog-pagination">
                    <a className="btn btn-outline-primary" href="#">Older</a>
                    <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                </nav>
            </div>
        );
    }
}