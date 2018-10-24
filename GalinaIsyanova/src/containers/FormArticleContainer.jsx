import React, { PureComponent } from 'react';
import FormArticle from 'components/FormArticle';
import { connect } from 'react-redux';
import { load } from 'actions/posts';

class FormArticleContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const { post } = this.props;

        return (
            <FormArticle {...post} />
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        post: state.posts.entities.find((post) => +post.my_id === +props.match.params.id),
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormArticleContainer);
