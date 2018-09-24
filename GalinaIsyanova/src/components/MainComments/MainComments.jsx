import React from 'react';
import RigthMenu from 'components/RigthMenu';
import AllCommentsView from 'components/AllCommentsView';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

function getCommetsFromOnePost(commentsOnePost, allCommentsArray, postTitle, fullPageRef) {
    commentsOnePost.map((oneComment) => {
        allCommentsArray.push({
            ...oneComment,
            postTitle: postTitle,
            fullPageRef: fullPageRef,
        });
        if (oneComment.answerToComments.length) {
            getCommetsFromOnePost(oneComment.answerToComments, allCommentsArray, postTitle, fullPageRef);
        }
    });
}

function getCommetsArray(postsInfoArray, allCommentsArray) {

    postsInfoArray.map((postOneInfo) => {
        getCommetsFromOnePost(postOneInfo.comments, allCommentsArray, postOneInfo.postTitle, postOneInfo.fullPageRef);
    });

    return allCommentsArray;
}

export default function MainComments(props) {
    const { postsInfoArray, titleComments, smallTitleComments, paginationButtonName, leftContentCategoryForm,
        rightContentCategoryForm, contentSideWidget } = props;
    const allCommentsArray = getCommetsArray(postsInfoArray, []);

    return (
        <Container>
            <Row>
                <Col lg="8"><AllCommentsView titleComments={titleComments}
                    smallTitleComments={smallTitleComments} paginationButtonName={paginationButtonName}
                    allCommentsArray={allCommentsArray} /></Col>
                <Col lg="4"><RigthMenu leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} /></Col>
            </Row>
        </Container>
    );
}

MainComments.propTypes = {
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
    titleComments: PropTypes.string,
    smallTitleComments: PropTypes.string,
    paginationButtonName: PropTypes.shape({
        left: PropTypes.string,
        right: PropTypes.string,
    }),
    leftContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    rightContentCategoryForm: PropTypes.arrayOf(PropTypes.string),
    contentSideWidget: PropTypes.string,
}

MainComments.defaultProps = {
    postsInfoArray: [],
    titleComments: '',
    smallTitleComments: '',
    paginationButtonName: {},
    leftContentCategoryForm: [],
    rightContentCategoryForm: [],
    contentSideWidget: '',
};