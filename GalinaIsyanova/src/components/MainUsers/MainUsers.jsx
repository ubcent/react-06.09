import React from 'react';
import RigthMenu from 'components/RigthMenu';
import AllUsersView from 'components/AllUsersView';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default function MainUsers(props) {
    const { users, titleUsers, smallTitleUsers, paginationButtonName, leftContentCategoryForm, rightContentCategoryForm,
        contentSideWidget } = props;

    return (
        <Container>
            <Row>
                <Col lg="8"><AllUsersView titleUsers={titleUsers} smallTitleUsers={smallTitleUsers}
                    paginationButtonName={paginationButtonName} users={users} /></Col>
                <Col lg="4"><RigthMenu leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} /></Col>
            </Row>
        </Container>
    );
}

MainUsers.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        imageSrc: PropTypes.string,
        name: PropTypes.string,
        pageRef: PropTypes.string,
    })),
    titleUsers: PropTypes.string,
    smallTitleUsers: PropTypes.string,
    paginationButtonName: PropTypes.shape({
        left: PropTypes.string,
        right: PropTypes.string,
    }),
    leftContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    rightContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    contentSideWidget: PropTypes.string,
};