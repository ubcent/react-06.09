import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        const { articleInfo } = this.props;

        return (
            <div>
                <h1 className="mt-4">{articleInfo.postTitle}</h1>
                <p className="lead">
                    by&nbsp;
                    <a href="#">{articleInfo.author}</a>
                </p>
                <hr></hr>
                <p>Posted on {articleInfo.datePublished}</p>
                <hr></hr>
                <img className="img-fluid rounded" src={articleInfo.imageSrc} alt=""></img>
                <hr></hr>
                {articleInfo.textWithClass.map((textClass, ind) => 
                    <p key={ind} className={textClass.class}>{textClass.text}</p>)}
                
                <blockquote className="blockquote">
                    <p className="mb-0">{articleInfo.blockquote.text}</p>
                    <footer className="blockquote-footer">{articleInfo.blockquote.footerText}
                        <cite title={articleInfo.blockquote.citeTitle}>{articleInfo.blockquote.citeText}</cite>
                    </footer>
                </blockquote>

                {articleInfo.textWithClassMore.map((textClass, ind) => 
                    <p key={ind} className={textClass.class}>{textClass.text}</p>)}

                <hr></hr>
            </div>
        );
    }
}