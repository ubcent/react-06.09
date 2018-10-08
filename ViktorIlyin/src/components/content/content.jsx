import React, { Component } from 'react';
import ArticleLictContainer from 'containers/ArticlesListContainer';

import './content.css';

export default class Content extends Component {

    render() {

        return (
           <div className="content">
               <h1>Articles</h1>
               <ArticleLictContainer />
           </div>
        );
    }
}