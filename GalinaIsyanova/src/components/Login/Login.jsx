import './Login.css';

import React, { Component } from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

export default class Login extends Component {
    static propTypes = {
        titleButtonLog: PropTypes.string
    };
    static defaultProps = {
        titleButtonLog: 'Log in'
    };

    handleLogInButton() {
        const $dialogLogIn = $('#dialog');
        $dialogLogIn.empty();
        $dialogLogIn.append($('<div />', {
            id: 'input_login',
            class: 'input_dialog'
        }));
        const $inputLogin = $('#input_login');
        $inputLogin.append($('<label />', {
            text: 'Login: '
        }));
        $inputLogin.append($('<input />', {
            type: 'text'
        }));
        $dialogLogIn.append($('<div />', {
            id: 'input_password',
            class: 'input_dialog'
        }));
        const $inputPassword = $('#input_password');
        $inputPassword.append($('<label />', {
            text: 'Password: '
        }));
        $inputPassword.append($('<input />', {
            type: 'password'
        }));

        $dialogLogIn.dialog({
            modal: true,
            title: 'Input information',
            buttons: {
                'OK': function () {
                    $(this).dialog('close');
                }
            }
        });
    }

    render() {
        const { titleButtonLog } = this.props;
        const loginClass = className('login');

        return (
            <div className={loginClass}>
                <button onClick={this.handleLogInButton}>{titleButtonLog}</button>
            </div>
        );
    }
}