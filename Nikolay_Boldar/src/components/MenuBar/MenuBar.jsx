import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

export default class MenuBar extends Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        const {menuItems} = this.props;
        return (
            <Menu compact borderless>
                {menuItems.map((item,idx)=><Menu.Item
                                                key={idx}
                                                name={item}
                                                active={activeItem ==={item}}
                                                onClick={this.handleItemClick}
                >{item}</Menu.Item>)}
            </Menu>
        )
    }
}