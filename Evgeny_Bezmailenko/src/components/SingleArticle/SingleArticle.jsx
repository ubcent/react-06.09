import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentsListContainer from 'containers/CommentsListContainer';

export default class SingleArticle extends Component {
    render() {
        const post = this.props.posts.filter(function (elem, idx) {
            return idx === 1;
        });

        return (
            <div className="col-md-8 blog-main">
                <h3 className="pb-3 mb-4 font-italic border-bottom">Single Article</h3>
                {post.map((post) =>
                    <div className="blog-post" key={post.id}>
                        <Link className="blog-post-title" to={`/posts/${post.id}`}>
                            <h2 className="blog-post-title">{post.title}</h2></Link>
                        <p className="blog-post-meta">{post.date} by <a href="#">Author</a></p>
                        {post.body}</div>)}
                <CommentsListContainer/>
            </div>
        );
    }
}
