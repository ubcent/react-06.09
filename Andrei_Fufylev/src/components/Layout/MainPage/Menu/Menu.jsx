import './Menu.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar  light expand='md'>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='mr-auto' navbar>
                  <NavItem>
                    <NavLink href='/'>Home</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Articles
                    </DropdownToggle>
                    <DropdownMenu left>
                      <DropdownItem>
                            <NavLink href='#'>Topic 1</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                            <NavLink href='#'>Topic 2</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                      <NavLink href='#'>Archieve</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href='/contacts/'>Contacts</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
}