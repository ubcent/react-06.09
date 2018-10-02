import './OneUserPage.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function OneUserPage(props) {
    const { name, dateRegistration, imageSrcFull, posts } = props;

    const classNoPost = classNames('lead', {
        'show': posts.length == 0,
        'hide': posts.length > 0,
    });

    const classListPost = classNames('mb-0', {
        'show': posts.length > 0,
        'hide': posts.length == 0,
    });

    return (
        <div>
            <h1 className="mt-4">{name}</h1>
            <hr></hr>
            <p>Registered on {dateRegistration}</p>
            <hr></hr>
            <img className="img-fluid rounded" src={imageSrcFull} alt=""></img>
            <hr></hr>
            <p className={classNoPost}>This user has not published any post.</p>
            <div className={classListPost}>This user has published this posts:
                <div className="flex mt-4">
                    {posts.map((post, idx) => 
                        <a key={idx} href={post.href} className="btn btn-primary">{post.title}</a>
                    )}
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

OneUserPage.propTypes = {
    name: PropTypes.string,
    dateRegistration: PropTypes.string,
    imageSrcFull: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        href: PropTypes.string,
    })),
};

OneUserPage.defaultProps = {
    name: '',
    dateRegistration: '',
    imageSrcFull: '',
    posts: [],
};