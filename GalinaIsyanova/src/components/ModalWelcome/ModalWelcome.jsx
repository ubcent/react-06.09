import React, { PureComponent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

export default class ModalWelcome extends PureComponent {
    static propTypes = {
        title: PropTypes.string, 
        info: PropTypes.string, 
        textButton: PropTypes.string,
    };
    static defaultProps = {
        title: '', 
        info: '', 
        textButton: '',
    };

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
        const { title, info, textButton } = this.props;

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