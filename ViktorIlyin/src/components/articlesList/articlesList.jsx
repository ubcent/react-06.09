import React, { PureComponent } from 'react';
import Article from 'components/article';

export default class ArticlesList extends PureComponent {
    render() {
        const { articles } = this.props;
        return (
            <div>
                {articles.slice(0).reverse().map((art) => <Article key={art.id} id={art.id} title={art.title} dat={art.dat} text={art.text} goTo={() => this.showArt(art.id)} />)}
            </div>         
        );
    }
}