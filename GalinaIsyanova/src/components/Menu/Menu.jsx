import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import className from 'classnames';
import PropTypes from 'prop-types';

export default class Menu extends Component {
    static propTypes = {
        brand: PropTypes.string,
        menuArray: PropTypes.arrayOf(PropTypes.string),
    };
    static defaultProps = {
        brand: '',
        menuArray: [],
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    
    toggle = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isOpen: !prevState.isOpen
            }
        });
    }

    render() {
        const { brand, menuArray } = this.props;
        const NavBarClass = className('pr-0 pl-0');
        const NavClass = className('ml-auto');

        return (
            <div>
                <Navbar color="dark" dark expand="md" className={NavBarClass}>
                    <NavbarBrand href="#">{brand}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={NavClass} navbar>
                            {menuArray.map((menuName, ind) => 
                                ind==0 ? <NavItem key={ind}><NavLink active href="#">{menuName}</NavLink></NavItem> :
                                <NavItem key={ind}><NavLink href="#">{menuName}</NavLink></NavItem>)
                            }         
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}