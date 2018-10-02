import React, { PureComponent } from 'react';
import AllUsersView from 'components/AllUsersView';
import { connect } from 'react-redux';
import { load } from 'actions/users';

class UsersContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const titleUsers = 'Users in my blog';
        const smallTitleUsers = 'You can get more information about the user if you click "Read More"';
        const paginationButtonName = {
            left: 'Older',
            right: 'Newer'
        }
        const { users } = this.props;

        return (
            <AllUsersView titleUsers={titleUsers} smallTitleUsers={smallTitleUsers} 
                paginationButtonName={paginationButtonName} users={users} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        users: state.users.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
