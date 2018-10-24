import React, { Component } from 'react';
import { load } from 'actions/posts';
import {connect} from "react-redux";
import Articles from 'components/Articles';


class PostsContainer extends Component {
    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const { posts } = this.props;
        return (
            <Articles posts={posts} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        posts: state.posts.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);