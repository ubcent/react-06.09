import './Articles.css';

import React, { Component } from 'react';

const itemsArticles = [
    {
        title: 'Heading_1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit'
    },
    {
        title: 'Heading_2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia '
    },
    {
        title: 'Heading_3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia perferendis quam reprehenderit'
    }
];

export default class Articles extends Component {
    render() {
        const items = itemsArticles.map((item, index) => {
            return (
                <div className='col-md-4' key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <p><a className='btn btn-secondary' href='#' role='button'>More &raquo;</a></p>
                </div>
            );
        });

        return (
            <div className='row'>
                {this.props.children}
                {items}
            </div>
        );
    }
}