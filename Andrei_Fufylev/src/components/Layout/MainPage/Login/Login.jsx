import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color='secondary' size='lg' onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} >Please sign in</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for='exampleEmail'>Email</Label>
                                <Input type='email' name='email' id='exampleEmail' placeholder='Enter your email or login' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='examplePassword'>Password</Label>
                                <Input type='password' name='password' id='examplePassword' placeholder='Enter your password ' />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' />{' '}
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='secondary' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}