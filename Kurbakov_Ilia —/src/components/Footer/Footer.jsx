import './Footer.css';
import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Footer extends Component{
    render(){
        const {menu,children} = this.props;
        return(
            <footer>
                <Nav className='footer_menu'>
                    {menu.map((element,idx) => <NavItem key={idx}><NavLink  href='#'>{element}</NavLink ></NavItem>)}

                </Nav>

            </footer>
        );
    }

}