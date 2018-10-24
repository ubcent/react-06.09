import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function BlogPost(props) {
    const { imgSrcShort, postTitle, postTextShort, fullPageRef, datePublishedShort, author } = props;

    return (
        <div className="card mb-4">
            <img className="card-img-top" src={imgSrcShort} alt="Card image cap"></img>
            <div className="card-body">
                <h2 className="card-title">{postTitle}</h2>
                <p className="card-text">{postTextShort}</p>
                <Link to={fullPageRef} className="btn btn-primary">Read More &rarr;</Link>
            </div>
            <div className="card-footer text-muted">
                Posted on {datePublishedShort} by&nbsp;
            <Link to={author.pageRef}>{author.name}</Link>
            </div>
        </div>
    );
}

BlogPost.propTypes = {
    imgSrcShort: PropTypes.string,
    postTitle: PropTypes.string,
    postTextShort: PropTypes.string,
    fullPageRef: PropTypes.string,
    datePublishedShort: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string,
        pageRef: PropTypes.string,
    }),
};

BlogPost.defaultProps = {
    imgSrcShort: '',
    postTitle: '',
    postTextShort: '',
    fullPageRef: '',
    datePublishedShort: '',
    author: {},
};