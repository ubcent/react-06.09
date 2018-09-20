import React,{Component} from 'react';
import {Button,Icon} from 'semantic-ui-react';

export default class NavButton extends Component{

    render(){
        return (
            <Button.Group>
                <Button>
                    <Icon name = "long arrow alternate left"/>
                    Older
                </Button>
                <Button>
                    Newer
                    <Icon name = "long arrow alternate right"/>
                </Button>
            </Button.Group>
        );
    }
}



