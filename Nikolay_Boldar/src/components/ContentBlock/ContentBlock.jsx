import React,{Component}from 'react';
import PostCard from 'components/ContentBlock/PostCard';
import {Header} from 'semantic-ui-react';
import NavButton from 'components/NavButton';

export default class ContentBlock extends Component{

    render(){
        return (
            <div>
                <Header as='h1'>Page Header</Header>
                <Header as='h3'>Secondary Text</Header>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <NavButton/>
            </div>
        );
    }
}