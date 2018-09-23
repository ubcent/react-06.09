import './Articles.css';

import React, { Component } from 'react';

const itemsArticles = [
    {
        title: 'Sample blog post',
        date: 'January 1, 2014',
        author: 'Mark',
        text: <div>
            <p>This blog post shows a few different types of content that's supported and styled with
                Bootstrap. Basic typography, images, and code are all supported.</p>
            <hr/>
            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>,
                nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                consectetur purus sit amet fermentum.</p>
            <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna
                    mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut
                    id elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur
                purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <h2>Heading</h2>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis,
                est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.</p>
            <pre><code>Example code block</code></pre>
            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis
                euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna
                mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus.</p>
            <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a
                pharetra augue.</p>
            <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus.
                </li>
                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at
                lobortis.</p>
        </div>
    },
    {
        title: 'Another blog post',
        date: 'December 23, 2013',
        author: 'Jacob',
        text: <div>
            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur
                ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit
                amet fermentum.</p>
            <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna
                    mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                    elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus
                sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est
                non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi
                leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
    },
    {
        title: 'New feature',
        date: 'December 14, 2013',
        author: 'Chris',
        text: <div>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis
                euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.</p>
            <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus
                sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra
                augue.</p>
        </div>
    }
];

export default class Articles extends Component {
    render() {
        const items = itemsArticles.map((item, index) => {
            return (
                <div className="blog-post" key={index}>
                    <h2 className="blog-post-title">{item.title}</h2>
                    <p className="blog-post-meta">{item.date} by <a href="#">{item.author}</a></p>
                    {item.text}
                </div>
            );
        });

        return (
            <div className="col-md-8 blog-main">
                    <h3 className="pb-3 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>

                {this.props.children}
                {items}
                <nav className="blog-pagination">
                    <a className="btn btn-outline-primary" href="#">Older</a>
                    <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
                </nav>
            </div>
        );
    }
}