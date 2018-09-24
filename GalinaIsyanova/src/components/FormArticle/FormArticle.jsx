import React from 'react';
import Article from 'components/Article';
import Comments from 'components/Comments';
import PropTypes from 'prop-types';

export default function FormArticle(props) {
    const { postTitle, author, datePublished, imageSrc, textWithClass, blockquote, textWithClassMore, comments } =
        props;

    return (
        <div>
            <Article postTitle={postTitle} author={author} datePublished={datePublished} imageSrc={imageSrc}
                textWithClass={textWithClass} blockquote={blockquote} textWithClassMore={textWithClassMore} />
            <Comments comments={comments} />
        </div>
    );
}

FormArticle.propTypes = {
    postTitle: PropTypes.string,
    datePublished: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string,
        pageRef: PropTypes.string,
    }),
    imageSrc: PropTypes.string,
    textWithClass: PropTypes.arrayOf(PropTypes.shape({
        class: PropTypes.string,
        text: PropTypes.string
    })),
    blockquote: PropTypes.shape({
        text: PropTypes.string,
        footerText: PropTypes.string,
        citeTitle: PropTypes.string,
        citeText: PropTypes.string,
    }),
    textWithClassMore: PropTypes.arrayOf(PropTypes.shape({
        class: PropTypes.string,
        text: PropTypes.string
    })),
    comments: PropTypes.arrayOf(PropTypes.shape({
        userImageSrc: PropTypes.string,
        userName: PropTypes.string,
        commentText: PropTypes.string,
        answerToComments: PropTypes.arrayOf(PropTypes.shape({
            userImageSrc: PropTypes.string,
            userName: PropTypes.string,
            commentText: PropTypes.string
        })),
    })),
};
FormArticle.defaultProps = {
    postTitle: '',
    datePublished: '',
    author: {},
    imageSrc: '',
    textWithClass: [],
    blockquote: {},
    textWithClassMore: [],
    comments: [],
};
