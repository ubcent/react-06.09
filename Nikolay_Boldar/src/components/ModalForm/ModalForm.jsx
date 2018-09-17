import React from 'react';
import {Header, Modal, Button, Icon} from 'semantic-ui-react';
import LoginForm from 'components/LoginForm';

const ModalForm = () => (
    <Modal trigger={<Button color='purple' size='small' floated='right' style={{width: 100, height: 40}}>
        <Icon name='user'/>
        login
    </Button>}>
        <Modal.Header>Enter the system for better experience</Modal.Header>
        <Modal.Content>
            <LoginForm/>
        </Modal.Content>
    </Modal>
);

export default ModalForm;