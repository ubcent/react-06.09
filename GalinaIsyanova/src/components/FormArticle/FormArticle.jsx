import React, { Component } from 'react';
import Article from 'components/Article';
import Comments from 'components/Comments';

export default class FormArticle extends Component {
    render() {
        const myTextWithClass = [
            {
                class: 'lead',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?'
            }, {
                class: '',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
            }, {
                class: '',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
            }, {
                class: '',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
            }
        ];

        const myBlockquote = {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
            footerText: 'Someone famous in ',
            citeTitle: 'Source Title',
            citeText: 'Source Title'
        };

        const myTextWithClass1 = [
            {
                class: '',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?'
            }, {
                class: '',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!'
            }

        ];

        const myArticleInfo = {
            postTitle: 'Post Title',
            author: 'Start Bootstrap',
            datePublished: 'January 1, 2018 at 12:00 PM',
            imageSrc: 'http://placehold.it/900x300',
            textWithClass: myTextWithClass,
            blockquote: myBlockquote,
            textWithClassMore: myTextWithClass1
        };

        return (
            <div>
                <Article articleInfo = {myArticleInfo}/>
                <Comments />
            </div>
        );
    }
}