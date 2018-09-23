import './PreviewCategory.css';

import React, { Component } from 'react';

const itemsCategoryCard = [
    {
        category: 'World',
        colorCategory: 'text-primary',
        title: 'Featured post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        date: '12 nov',
        imgSrc: 'holder.js/200x250?bg=55595c&fg=#eceeef&text=Thumbnail',
    },
    {
        category: 'Design',
        colorCategory: 'text-success',
        title: 'Post title',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        date: '11 nov',
        imgSrc: 'holder.js/200x250?bg=55595c&fg=#eceeef&text=Thumbnail',
    },
];

export default class PreviewCategory extends Component {
    render() {
        const items = itemsCategoryCard.map((item, index) => {
            return (
                <div className="col-md-6" key={index}>
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2" className={item.colorCategory}>{item.category}</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="#">{item.title}</a>
                            </h3>
                            <div className="mb-1 text-muted">{item.date}</div>
                            <p className="card-text mb-auto">{item.text}</p>
                            <a href="#">Continue reading</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-lg-block"
                             data-src={item.imgSrc} alt="Card image cap"/>
                    </div>
                </div>
            );
        });

        return (
            <div className="row mb-2">
                {this.props.children}
                {items}
            </div>
        );
    }
}