import React from 'react';
import { Button,Icon } from 'semantic-ui-react';

const LoginButton = () => (

        <Button  color='purple' size='small' floated='right' style={{width : 100,height:40}}>
            <Icon name='user' />
            login
        </Button>

);

export default LoginButton;