import React from 'react';
import RigthMenu from 'components/RigthMenu';
import FormArticle from 'components/FormArticle';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default function Main(props) {
    const { onePostInfo, leftContentCategoryForm, rightContentCategoryForm, contentSideWidget } = props;
    return (
        <Container>
            <Row>
                <Col lg="8"><FormArticle {...onePostInfo} /></Col>
                <Col lg="4"><RigthMenu leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} /></Col>
            </Row>
        </Container>
    );
}

Main.propTypes = {
    onePostInfo: PropTypes.shape({
        imgSrcShort: PropTypes.string,
        postTitle: PropTypes.string,
        postTextShort: PropTypes.string,
        fullPageRef: PropTypes.string,
        datePublishedShort: PropTypes.string,
        datePublished: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
            pageRef: PropTypes.string,
        }),
        imageSrc: PropTypes.string,
        textWithClass: PropTypes.arrayOf(PropTypes.shape({
            class: PropTypes.string,
            text: PropTypes.string
        })),
        blockquote: PropTypes.shape({
            text: PropTypes.string,
            footerText: PropTypes.string,
            citeTitle: PropTypes.string,
            citeText: PropTypes.string,
        }),
        textWithClassMore: PropTypes.arrayOf(PropTypes.shape({
            class: PropTypes.string,
            text: PropTypes.string
        })),
        comments: PropTypes.arrayOf(PropTypes.shape({
            userImageSrc: PropTypes.string,
            userName: PropTypes.string,
            commentText: PropTypes.string,
            answerToComments: PropTypes.arrayOf(PropTypes.shape({
                userImageSrc: PropTypes.string,
                userName: PropTypes.string,
                commentText: PropTypes.string
            })),
        })),
    }),
    leftContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    rightContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    contentSideWidget: PropTypes.string,
};
Main.defaultProps = {
    onePostInfo: {},
    leftContentCategoryForm: [],
    rightContentCategoryForm: [],
    contentSideWidget: '',
};
