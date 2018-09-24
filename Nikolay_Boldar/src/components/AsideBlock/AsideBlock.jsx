import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import Search from 'components/Header/Search';


export default class AsideBlock extends Component {
    prepareLinks() {
        const {links} = this.props;
        return links.map((link) => <a href={'#'}>{link}</a>);
    }

    render() {
        const description = {
            item1: Search,
            item2: this.prepareLinks(),
            item3: 'You can put anything you want inside of these side widgets.' +
            ' They are easy to use, and feature the new Bootstrap 4 card containers!'
        };
        const {headers} = this.props;

        return (
            <div>

                <Card>
                    <Card.Content header={headers[0]}/>
                    <Card.Content description={description.item1}/>
                </Card>
                <Card>
                    <Card.Content header={headers[1]}/>
                    <Card.Content description={description.item2}/>
                </Card>
                <Card>
                    <Card.Content header={headers[2]}/>
                    <Card.Content description={description.item3}/>
                </Card>
            </div>
        );
    }
}


