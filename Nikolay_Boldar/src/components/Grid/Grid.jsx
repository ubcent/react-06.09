import React from 'react';
import {Grid} from 'semantic-ui-react';
import IconCompany from 'components/Header/IconCompany';
import Search from 'components/Header/Search';
import MenuBar from "components/MenuBar/";
import AsideBlock from "components/AsideBlock";
import ContentBlock from 'components/ContentBlock';
import './Grid.css';

const numberOfPosts = [0,1,2];
const menuItems = ['home', 'about', 'services', 'contact'];
const links = ['Web Design', 'HTML', 'Freebies', 'JavaScript', 'CSS', 'Tutorials'];
const headers = ['Search', 'Categories', 'Side Widget'];


const GridLayout = () => (

    <Grid celled className="grid-block">
        <Grid.Row  verticalAlign='middle'>
            <Grid.Column  flex flex-row width={16} className="header-block" verticalAlign='middle'>
                <IconCompany />
                <MenuBar className="menu-block" menuItems={menuItems}></MenuBar>

            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={10} style={{minHeight: '100%', padding: '1em 1em'}}>
                <ContentBlock numberOfPosts={numberOfPosts}/>
            </Grid.Column>
            <Grid.Column width={6} style={{minHeight: '100%', padding: '1em 1em'}}>
                <AsideBlock links={links} headers={headers}></AsideBlock>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                Copyright © Your Website 2018
            </Grid.Column>
        </Grid.Row>
    </Grid>
);
export default GridLayout;