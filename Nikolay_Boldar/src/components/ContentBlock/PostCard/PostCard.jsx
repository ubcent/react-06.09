import React, {Component} from 'react';
import {Card, Button, Icon} from 'semantic-ui-react';
import imageCard from './img.png';
import './PostCard.css';

export default class PostCard extends Component {

    render() {

        return (
            <Card >
                <Card.Content large className="my-card">
                    <img src={imageCard}/>
                </Card.Content>
                <Card.Content>
                    <h1>Post Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reiciendis aliquid atque, nulla? Quos cum ex quis soluta,
                        a laboriosam.
                        Dicta expedita corporis animi vero voluptate voluptatibus possimus,
                        veniam magni quis!</p>
                    <Button>Read More<Icon name='long arrow alternate right'/></Button>
                </Card.Content>
                <Card.Content extra>
                    Posted on January 1, 2017 by
                    <a href={'#'}> Start Bootstrap </a>
                </Card.Content>
            </Card>
        );
    }

}