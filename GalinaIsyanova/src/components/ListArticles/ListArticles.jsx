import React, { PureComponent } from 'react';
import BlogPost from 'components/BlogPost';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class ListArticles extends PureComponent {
    static propTypes = {
        titleList: PropTypes.string,
        smallTitleList: PropTypes.string,
        postsInfoArray: PropTypes.arrayOf(
            PropTypes.shape({
                imgSrcShort: PropTypes.string,
                postTitle: PropTypes.string,
                postTextShort: PropTypes.string,
                fullPageRef: PropTypes.string,
                datePublishedShort: PropTypes.string,
                author: PropTypes.shape({
                    name: PropTypes.string,
                    pageRef: PropTypes.string,
                })
            })
        ),
        paginationButtonName: PropTypes.shape({
            left: PropTypes.string,
            right: PropTypes.string,
        }),
    };

    static defaultProps = {
        titleList: '',
        smallTitleList: '',
        postsInfoArray: [],
        paginationButtonName: {},
    };

    constructor(props) {
        super(props);

        const { postsInfoArray } = this.props;
        const pageForPrint = 0;
        this.countPostInPage = 3;
        const infoForPrint = this.findPostsForPrint(pageForPrint, postsInfoArray);

        this.state = {
            page: pageForPrint,
            postsInfoForPrint: infoForPrint.arrayForPrint,
            stateLeftButton: infoForPrint.stateLeftButton,
            stateRightButton: infoForPrint.stateRightButton,
        }
    }

    findPostsForPrint(page, postsInfoArray) {
        const infoForPrint = {
            arrayForPrint: [],
            stateLeftButton: 1,
            stateRightButton: 1,
        }

        if (page == 0) {
            infoForPrint.stateLeftButton = 0;
        }

        if ((page + 1) * this.countPostInPage >= postsInfoArray.length) {
            infoForPrint.stateRightButton = 0;
        }

        infoForPrint.arrayForPrint = postsInfoArray.slice(page * this.countPostInPage, 
            (page + 1) * this.countPostInPage);

        return infoForPrint;
    }

    handleClickRef = (event) => {
        event.preventDefault();
        const addition = event.target.name === 'left' ? -1 : 1;

        this.setState((prevState) => {
            const { postsInfoArray } = this.props;
            const infoForPrint = this.findPostsForPrint(prevState.page + addition, postsInfoArray);

            return {
                ...prevState,
                page: prevState.page + addition,
                postsInfoForPrint: infoForPrint.arrayForPrint,
                stateLeftButton: infoForPrint.stateLeftButton,
                stateRightButton: infoForPrint.stateRightButton,
            }
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState((prevState) => {
            const { postsInfoArray } = newProps;
            const pageForPrint = 0;
            const infoForPrint = this.findPostsForPrint(pageForPrint, postsInfoArray);

            return {
                ...prevState,
                page: pageForPrint,
                postsInfoForPrint: infoForPrint.arrayForPrint,
                stateLeftButton: infoForPrint.stateLeftButton,
                stateRightButton: infoForPrint.stateRightButton,
            }
        });
    }

    render() {
        const { titleList, smallTitleList, paginationButtonName } = this.props;
        const { postsInfoForPrint, stateLeftButton, stateRightButton } = this.state;

        const classLeftButton = classNames('page-item', {
            'disabled': stateLeftButton == 0,
        });
        const classRigthButton = classNames('page-item', {
            'disabled': stateRightButton == 0,
        });

        return (
            <div>
                <h1 className="my-4">{titleList}</h1>
                <h2 className="my-4"><small>{smallTitleList}</small></h2>

                {postsInfoForPrint.map((postInfo, idx) => <BlogPost key={idx} {...postInfo} />)}

                <ul className="pagination justify-content-center mb-4">
                    <li className={classLeftButton} >
                        <a className="page-link" href="#" name="left" onClick={this.handleClickRef}>
                            &larr; {paginationButtonName.left}
                        </a>
                    </li>
                    <li className={classRigthButton}>
                        <a className="page-link" href="#" name="right" onClick={this.handleClickRef}>
                            {paginationButtonName.right} &rarr;
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

