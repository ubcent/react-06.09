import './Articles.css';

import React, { Component } from 'react';

const itemsArticles = [
    {
        title: 'Article 1',
        author: 'Author #',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia perferendis quam reprehenderit, sapiente, soluta tempora voluptas. Delectus excepturi facilis fugiat obcaecati odit. Aut eius iste iure quibusdam quisquam, voluptas.'
    },
    {
        title: 'Article 2',
        author: 'Author #',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia perferendis quam reprehenderit, sapiente, soluta tempora voluptas. Delectus excepturi facilis fugiat obcaecati odit. Aut eius iste iure quibusdam quisquam, voluptas.'
    },
    {
        title: 'Article 3',
        author: 'Author #',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia perferendis quam reprehenderit, sapiente, soluta tempora voluptas. Delectus excepturi facilis fugiat obcaecati odit. Aut eius iste iure quibusdam quisquam, voluptas.'
    },
    {
        title: 'Article 4',
        author: 'Author #',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia perferendis quam reprehenderit, sapiente, soluta tempora voluptas. Delectus excepturi facilis fugiat obcaecati odit. Aut eius iste iure quibusdam quisquam, voluptas.'
    },
    {
        title: 'Article 5',
        author: 'Author #',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia perferendis quam reprehenderit, sapiente, soluta tempora voluptas. Delectus excepturi facilis fugiat obcaecati odit. Aut eius iste iure quibusdam quisquam, voluptas.'
    },
    {
        title: 'Article 6',
        author: 'Author #',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt eaque, eligendi eum iusto necessitatibus officia optio quis rem. A aperiam autem cum esse in incidunt magni minus nisi odit perferendis placeat quibusdam recusandae sed sunt suscipit veritatis, vero? Accusamus beatae eius enim eveniet excepturi hic impedit in inventore mollitia perferendis quam reprehenderit, sapiente, soluta tempora voluptas. Delectus excepturi facilis fugiat obcaecati odit. Aut eius iste iure quibusdam quisquam, voluptas.'
    }
];

export default class Articles extends Component {

    render() {
        let items = itemsArticles.map((item, index) => {
            return (
                <div className='col-4' key={index}>
                    <div className='thumbnail'>
                        <div className='caption'>
                            <h3 className='text-white bg-secondary p-2'>{item.title}</h3>
                            <p className='text-justify text-secondary m-1'>{item.text}</p>
                            <p className='text-right text-black-50 m-3'><i>Author: {item.author}</i></p>
                        </div>
                    </div>
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