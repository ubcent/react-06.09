import React from 'react';
import {Grid} from 'semantic-ui-react';
import IconCompany from 'components/Header/IconCompany';
import Search from 'components/Header/Search';
import ModalForm from 'components/ModalForm';
import MenuBar from "components/MenuBar/";


const style={
    header:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        minHeight: 50,
        padding: '1em 0em'
    }
};
const GridLayout = () => (

    <Grid celled>
        <Grid.Row  verticalAlign='middle'>
            <Grid.Column width={16} style={style.header} verticalAlign='middle' >
                <IconCompany/>
                <Search/>
                <ModalForm/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16} style={{minHeight: 50, padding: '0em 0em'}}>
                <MenuBar/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4} style={{minHeight: '100%', padding: '1em 1em'}}>
                there is asidebar
            </Grid.Column>
            <Grid.Column width={12} style={{minHeight: '100%', padding: '1em 1em'}}>
                Here will be content
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                ... and this is footer
            </Grid.Column>
        </Grid.Row>
    </Grid>
);
export default GridLayout;