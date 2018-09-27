import React, { PureComponent } from 'react';
import OneUserPage from 'components/OneUserPage';

export default class OneUserContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                posts: [],
            },
        };
    }

    componentDidMount() {
        const { match } = this.props;

        fetch(`http://localhost:3000/users/${match.params.id}`)
            .then((response) => response.json())
            .then((user) => {
                this.setState((prevState) => ({
                    ...prevState,
                    user,
                }))
            });
    }

    render() {
        const { user } = this.state;

        return (
            <OneUserPage {...user} />
        );
    }
}

