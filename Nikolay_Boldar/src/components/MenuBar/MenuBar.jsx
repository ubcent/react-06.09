import React, {Component} from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';

export default class MenuBar extends Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu>
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                >
                    <Dropdown item text='Home'>
                        <Dropdown.Menu>
                            <Dropdown.Item>About us</Dropdown.Item>
                            <Dropdown.Item>Catalog</Dropdown.Item>
                            <Dropdown.Item>Help</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                    <Dropdown item text='Categories'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Electronics</Dropdown.Item>
                            <Dropdown.Item>Automotive</Dropdown.Item>
                            <Dropdown.Item>Home</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >
                    Upcoming Events
                </Menu.Item>
            </Menu>
        )
    }
}