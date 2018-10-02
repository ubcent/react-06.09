import './Form.css';

import React, {Component} from 'react';


export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
        };
    }

    handlePropChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClick = () => {
        const {onSend} = this.props;

        onSend(this.state);
    };

    render() {

        const {username, message} = this.state;
        return (
            <form>
                <input onChange={this.handlePropChange}
                       name="username" value={username}
                       type="text" placeholder="Username"/>
                <textarea onChange={this.handlePropChange} value={message} name="message" placeholder="Message">
                </textarea>
                <button onClick={this.handleClick}>Send</button>

            </form>
        );
    }
}