import React from 'react';
import RigthMenu from 'components/RigthMenu';
import IndexInfo from 'components/IndexInfo';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default function MainIndex(props) {
    const { titleIndex, infoIndex,  leftContentCategoryForm, rightContentCategoryForm, contentSideWidget } = props;

    return (
        <Container>
            <Row>
                <Col lg="8"><IndexInfo indexTitle={titleIndex} indexInfo={infoIndex} /></Col>
                <Col lg="4"><RigthMenu leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget}/></Col>
            </Row>
        </Container>
    );
}

MainIndex.propTypes = {
    titleIndex: PropTypes.string,
    infoIndex: PropTypes.string,
    leftContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    rightContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    contentSideWidget: PropTypes.string,
};

MainIndex.defaultProps = {
    titleIndex: '',
    infoIndex: '',
    leftContentCategoryForm: [],
    rightContentCategoryForm: [],
    contentSideWidget: '',
};