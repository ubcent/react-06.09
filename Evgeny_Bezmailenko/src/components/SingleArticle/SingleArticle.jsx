import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentsListContainer from 'containers/CommentsListContainer';

export default class SingleArticle extends PureComponent {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const { id, title, date, body } = this.props;

        return (
            <div className="col-md-8 blog-main">
                <h3 className="pb-3 mb-4 font-italic border-bottom">Single Article</h3>

                    <div className="blog-post">
                        <Link className="blog-post-title" to={`/posts/${id}`}>
                            <h2 className="blog-post-title">{title}</h2></Link>
                        <p className="blog-post-meta">{date} by <a href="#">Author</a></p>
                        {body}</div>)
                <CommentsListContainer/>
            </div>
        );
    }
}
