import React, { PureComponent } from 'react';
import AllUsersView from 'components/AllUsersView';

export default class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
            .then((response) => response.json())
            .then((users) => {
                this.setState((prevState) => ({
                    ...prevState,
                    users: prevState.users.concat(users),
                }))
            });
    }

    render() {
        const titleUsers = 'Users in my blog';
        const smallTitleUsers = 'You can get more information about the user if you click "Read More"';
        const paginationButtonName = {
            left: 'Older',
            right: 'Newer'
        }
        const { users } = this.state;

        return (
            <AllUsersView titleUsers={titleUsers} smallTitleUsers={smallTitleUsers} 
                paginationButtonName={paginationButtonName} users={users} />
        );
    }
}

