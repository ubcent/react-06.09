import React, { PureComponent } from 'react';
import FormArticle from 'components/FormArticle';

export default class FormArticleContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
        };
    }

    componentDidMount() {
        const { match } = this.props;

        fetch(`http://localhost:3000/postsInfoArray/${match.params.id}`)
            .then((response) => response.json())
            .then((post) => {
                this.setState((prevState) => ({
                    ...prevState,
                    post,
                }))
            });
    }

    render() {
        const { post } = this.state;

        return (
            <FormArticle {...post} />
        );
    }
}
