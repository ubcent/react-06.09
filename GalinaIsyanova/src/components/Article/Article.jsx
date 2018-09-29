import React from 'react';
import PropTypes from 'prop-types';

export default function Article(props) {
    const { postTitle, author, datePublished, imageSrc, textWithClass, blockquote, textWithClassMore } = props;

    return (
        <div>
            <h1 className="mt-4">{postTitle}</h1>
            <p className="lead">
                by&nbsp;
                    <a href={author.pageRef}>{author.name}</a>
            </p>
            <hr></hr>
            <p>Posted on {datePublished}</p>
            <hr></hr>
            <img className="img-fluid rounded" src={imageSrc} alt=""></img>
            <hr></hr>
            {textWithClass.map((textClass, ind) =>
                <p key={ind} className={textClass.class}>{textClass.text}</p>)}

            <blockquote className="blockquote">
                <p className="mb-0">{blockquote.text}</p>
                <footer className="blockquote-footer">{blockquote.footerText}
                    <cite title={blockquote.citeTitle}>{blockquote.citeText}</cite>
                </footer>
            </blockquote>

            {textWithClassMore.map((textClass, ind) =>
                <p key={ind} className={textClass.class}>{textClass.text}</p>)}

            <hr></hr>
        </div>
    );
}

Article.propTypes = {
    postTitle: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string,
        pageRef: PropTypes.string,
    }),
    datePublished: PropTypes.string,
    imageSrc: PropTypes.string,
    textWithClass: PropTypes.arrayOf(PropTypes.shape({
        class: PropTypes.string,
        text: PropTypes.string,
    })),
    blockquote: PropTypes.shape({
        text: PropTypes.string,
        footerText: PropTypes.string,
        citeTitle: PropTypes.string,
        citeText: PropTypes.string,
    }),
    textWithClassMore: PropTypes.arrayOf(PropTypes.shape({
        class: PropTypes.string,
        text: PropTypes.string,
    })),
};

Article.defaultProps = {
    postTitle: '',
    author: {},
    datePublished: '',
    imageSrc: '',
    textWithClass: [],
    blockquote: {},
    textWithClassMore: [],
};