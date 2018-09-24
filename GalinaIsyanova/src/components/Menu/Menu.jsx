import React, { PureComponent } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import className from 'classnames';
import PropTypes from 'prop-types';

export default class Menu extends PureComponent {
    static propTypes = {
        indexActive: PropTypes.number,
        menu: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            src: PropTypes.string,
        })),
        brand: PropTypes.shape({
            text: PropTypes.string,
            src: PropTypes.string,
        }),
    };
    static defaultProps = {
        indexActive: -1,
        menu: [],
        brand: {},
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
        const { brand, menuArray, indexActive } = this.props;
        const NavBarClass = className('pr-0 pl-0');
        const NavClass = className('ml-auto');

        return (
            <div>
                <Navbar color="dark" dark expand="md" className={NavBarClass}>
                    <NavbarBrand href={brand.src}>{brand.text}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={NavClass} navbar>
                            {menuArray.map((menuName, ind) =>
                                ind == indexActive ?
                                    <NavItem key={ind}><NavLink active href={menuName.src}>{menuName.text}</NavLink></NavItem> :
                                    <NavItem key={ind}><NavLink href={menuName.src}>{menuName.text}</NavLink></NavItem>)
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}