import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OneUser from 'components/OneUser';

export default class AllUsersView extends PureComponent {
    static propTypes = {
        users: PropTypes.arrayOf(PropTypes.shape({
            imageSrc: PropTypes.string,
            name: PropTypes.string,
            pageRef: PropTypes.string,
        })),
    };
    static defaultProps = {
        users: [],
    };

    constructor(props) {
        super(props);

        const { users } = this.props;
        const pageForPrint = 0;
        this.countPostInPage = 7;
        const infoForPrint = this.findPostsForPrint(pageForPrint, users);

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

        let i;
        for (i = page * this.countPostInPage; i < (page + 1) * this.countPostInPage; i++) {
            if (i >= postsInfoArray.length) {
                infoForPrint.stateRightButton = 0;
                return infoForPrint;
            }

            infoForPrint.arrayForPrint.push(postsInfoArray[i]);
        }

        if (i == postsInfoArray.length) {
            infoForPrint.stateRightButton = 0;
        }

        return infoForPrint;
    }

    handleClickRef = (event) => {
        const addition = event.target.name === 'left' ? -1 : 1;

        this.setState((prevState) => {
            const { users } = this.props;
            const infoForPrint = this.findPostsForPrint(prevState.page + addition, users);

            return {
                ...prevState,
                page: prevState.page + addition,
                postsInfoForPrint: infoForPrint.arrayForPrint,
                stateLeftButton: infoForPrint.stateLeftButton,
                stateRightButton: infoForPrint.stateRightButton,
            }
        });
    }

    render() {
        const { titleUsers, smallTitleUsers, paginationButtonName } = this.props;

        const { postsInfoForPrint, stateLeftButton, stateRightButton } = this.state;

        const classLeftButton = (stateLeftButton) ? 'page-item' : 'page-item disabled';
        const classRigthButton = (stateRightButton) ? 'page-item' : 'page-item disabled';

        return (
            <div>
                <h1 className="my-4">{titleUsers}</h1>
                <h2 className="my-4"><small>{smallTitleUsers}</small></h2>

                {postsInfoForPrint.map((oneUser, idx) => <OneUser key={idx} {...oneUser} />)}

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