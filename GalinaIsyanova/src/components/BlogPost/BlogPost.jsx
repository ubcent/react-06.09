import React from 'react';
import PropTypes from 'prop-types';

export default function BlogPost(props) {
    const { imgSrcShort, postTitle, postTextShort, fullPageRef, datePublishedShort, author } = props;

    return (
        <div className="card mb-4">
            <img className="card-img-top" src={imgSrcShort} alt="Card image cap"></img>
            <div className="card-body">
                <h2 className="card-title">{postTitle}</h2>
                <p className="card-text">{postTextShort}</p>
                <a href={fullPageRef} className="btn btn-primary">Read More &rarr;</a>
            </div>
            <div className="card-footer text-muted">
                Posted on {datePublishedShort} by&nbsp;
            <a href={author.pageRef}>{author.name}</a>
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