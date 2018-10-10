import React, { PureComponent } from 'react';
import OneUserPage from 'components/OneUserPage';
import { connect } from 'react-redux';
import { load } from 'actions/users';

class OneUserContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const { user } = this.props;

        return (
            <OneUserPage {...user} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        user: state.users.entities.find((user) => +user.my_id === +props.match.params.id),
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneUserContainer);