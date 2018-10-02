import React, { PureComponent } from 'react';
import ListArticles from 'components/ListArticles';
import { connect } from 'react-redux';
import { load } from 'actions/posts';

class ListArticlesContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const titleList = 'Read article from my blog';
        const smallTitleList = 'You can read each post more detailed if you click "Read More"';
        const paginationButtonName = {
            left: 'Older',
            right: 'Newer'
        }
        const { posts } = this.props;

        return (
            <ListArticles titleList={titleList} smallTitleList={smallTitleList} paginationButtonName={paginationButtonName} postsInfoArray={posts} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ListArticlesContainer);