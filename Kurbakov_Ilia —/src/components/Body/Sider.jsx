import React, {Component} from 'react';
import {Nav, NavLink,NavItem} from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class Sider extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        const menu = ['Главная', 'Блог', 'Темы'];
        const tem = ['JS', 'React', 'PHP'];
        return (
          <div>
              <div>
                  <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                  <Collapse isOpen={this.state.collapse}>
                      <Card>
                          <CardBody>
                              Anim pariatur cliche reprehenderit,
                              enim eiusmod high life accusamus terry richardson ad squid. Nihil
                              anim keffiyeh helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident.
                          </CardBody>
                      </Card>
                  </Collapse>
              </div>
              <div>
                  <p>Меню</p>
                  <Nav vertical>
                      {menu.map((element, idx) => <NavItem key={idx}><NavLink  href='#'>{element}</NavLink ></NavItem>)}

                  </Nav>
                  <hr/>
                  <p>Темы</p>
                  <Nav vertical>
                      {tem.map((element, idx) => <NavItem key={idx}><NavLink  href='#'>{element}</NavLink ></NavItem>)}

                  </Nav>
              </div>
          </div>


        );

    }
}
