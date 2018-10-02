import React, { PureComponent } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class Menu extends PureComponent {
    static propTypes = {
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
        const { brand, menuArray } = this.props;
        const { pathname } = this.props.location;

        return (
            <div>
                <Navbar color="dark" dark expand="md" className="pr-0 pl-0">
                    <NavbarBrand href={brand.src}>{brand.text}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {menuArray.map((menuName, ind) =>
                                menuName.src == pathname ?
                                    <NavItem key={ind}><Link className="nav-link active" to={menuName.src}>{menuName.text}</Link></NavItem> :
                                    <NavItem key={ind}><Link className="nav-link" to={menuName.src}>{menuName.text}</Link></NavItem>)
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(Menu);