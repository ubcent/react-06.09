import './Body.css';
import React, {Component} from 'react';

export default class Body extends Component{
    render(){
        const menu = ['Спорт','Новости','Политика'];
        return(
            <section className='body'>
                <ul className='menu_body'>
                    {menu.map((element,idx) => <li key={idx}><a href='#'>{element}</a></li>)}
                </ul>
                <article className="content">
                    <h1>Основной контент:</h1>

                </article>
            </section>
        );
    }
}