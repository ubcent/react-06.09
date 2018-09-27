import React, { PureComponent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalWelcome extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                modal: !this.state.modal
            }
        });
    }

    render() {
        const info = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        const title = 'Welcome!';
        const textButton = 'Read blog';

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>{info}</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>{textButton}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}