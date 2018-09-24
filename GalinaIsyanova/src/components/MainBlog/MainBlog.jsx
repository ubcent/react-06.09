import React from 'react';
import RigthMenu from 'components/RigthMenu';
import ListArticles from 'components/ListArticles';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default function MainBlog(props) {
    const { postsInfoArray, titleBlog, smallTitleBlog, paginationButtonName, leftContentCategoryForm, rightContentCategoryForm, contentSideWidget } = props;

    return (
        <Container>
            <Row>
                <Col lg="8"><ListArticles titleList={titleBlog} smallTitleList={smallTitleBlog}
                    postsInfoArray={postsInfoArray} paginationButtonName={paginationButtonName} /></Col>
                <Col lg="4"><RigthMenu leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} /></Col>
            </Row>
        </Container>
    );
}

MainBlog.propTypes = {
    postsInfoArray: PropTypes.arrayOf(PropTypes.shape({
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
    })),
    titleBlog: PropTypes.string,
    smallTitleBlog: PropTypes.string,
    paginationButtonName: PropTypes.shape({
        left: PropTypes.string,
        right: PropTypes.string,
    }),
    leftContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    rightContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    contentSideWidget: PropTypes.string,
};
MainBlog.defaultProps = {
    postsInfoArray: [],
    titleBlog: '',
    smallTitleBlog: '',
    paginationButtonName: {},
    leftContentCategoryForm: [],
    rightContentCategoryForm: [],
    contentSideWidget: '',
};
