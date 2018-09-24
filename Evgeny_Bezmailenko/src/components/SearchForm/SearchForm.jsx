import './SearchForm.css';

import React, { Component } from 'react';
import className from 'classnames';

export default class SearchForm extends Component {


    render() {
        const SearchClass = className('form-inline my-2 mr-2 my-lg-0');
        const ButtonClass = className('btn btn-outline-light bg-transparent text-white my-2 mr-2 my-sm-0');
        const InputClass = className('form-control sm-2');

        return (
            <form className={SearchClass} role='search'>
                <button className={ButtonClass}
                        type='submit'>Search
                </button>
                <input className={InputClass} type='text' placeholder='Search' aria-label='Search'/>
            </form>
    );
    }
}