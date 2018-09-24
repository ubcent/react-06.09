import React, { PureComponent } from 'react';
import Header from 'components/Header';
import MainIndex from 'components/MainIndex';
import MainBlog from 'components/MainBlog';
import Main from 'components/Main';
import MainComments from 'components/MainComments';
import MainUsers from 'components/MainUsers';
import Footer from 'components/Footer';
import ModalWelcome from 'components/ModalWelcome';
import PropTypes from 'prop-types';

export default class Layout extends PureComponent {
    static propTypes = {
        pageType: PropTypes.string,
        indexPostPage: PropTypes.number,
    };

    static defaultProps = {
        pageType: '',
        indexPostPage: -1,
    };

    renderIndexPage(myBrand, myMenu, titleIndex, infoIndex, leftContentCategoryForm, rightContentCategoryForm,
        contentSideWidget, myFooterContent, modalInfo, modalTitle, modalTextButton) {
        return (
            <div>
                <Header indexActive={0} menu={myMenu} brand={myBrand} />
                <MainIndex titleIndex={titleIndex} infoIndex={infoIndex} leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} />
                <Footer footerContent={myFooterContent} />
                <ModalWelcome info={modalInfo} title={modalTitle} textButton={modalTextButton} />
            </div>
        );
    }

    renderBlogPage(myBrand, myMenu, postsInfoArray, titleBlog, smallTitleBlog, paginationButtonName, leftContentCategoryForm, rightContentCategoryForm, contentSideWidget, myFooterContent) {
        return (
            <div>
                <Header indexActive={1} menu={myMenu} brand={myBrand} />
                <MainBlog titleBlog={titleBlog} smallTitleBlog={smallTitleBlog} paginationButtonName={paginationButtonName} postsInfoArray={postsInfoArray} leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} />
                <Footer footerContent={myFooterContent} />
            </div>
        );
    }

    renderPostPage(myBrand, myMenu, onePostInfo, leftContentCategoryForm, rightContentCategoryForm, contentSideWidget,
        myFooterContent) {
        return (
            <div>
                <Header indexActive={-1} menu={myMenu} brand={myBrand} />
                <Main onePostInfo={onePostInfo} leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} />
                <Footer footerContent={myFooterContent} />
            </div>
        );
    }

    renderCommentsPage(myBrand, myMenu, postsInfoArray, titleComments, smallTitleComments, paginationButtonName,
        leftContentCategoryForm, rightContentCategoryForm, contentSideWidget, myFooterContent) {
        return (
            <div>
                <Header indexActive={2} menu={myMenu} brand={myBrand} />
                <MainComments titleComments={titleComments} smallTitleComments={smallTitleComments} paginationButtonName={paginationButtonName} postsInfoArray={postsInfoArray} leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} />
                <Footer footerContent={myFooterContent} />
            </div>
        );
    }

    renderUsersPage(myBrand, myMenu, titleUsers, smallTitleUsers, paginationButtonName, users,
        leftContentCategoryForm, rightContentCategoryForm, contentSideWidget, myFooterContent) {
        return (
            <div>
                <Header indexActive={3} menu={myMenu} brand={myBrand} />
                <MainUsers users={users} titleUsers={titleUsers} smallTitleUsers={smallTitleUsers} paginationButtonName={paginationButtonName} leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} />
                <Footer footerContent={myFooterContent} />
            </div>
        );
    }

    render() {
        const { pageType, indexPostPage } = this.props;
        const myFooterContent = 'Copyright © Your Website 2018';
        const postsInfoArray = [
            {
                imgSrcShort: 'http://placehold.it/750x300',
                postTitle: 'Post Title1',
                postTextShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                fullPageRef: 'post1.html',
                datePublishedShort: 'January 1, 2017',
                datePublished: 'January 1, 2018 at 12:00 PM',
                author: {
                    name: 'Start Bootstrap',
                    pageRef: '#',
                },
                imageSrc: 'http://placehold.it/900x300',
                textWithClass: [
                    {
                        class: 'lead',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }
                ],
                blockquote: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    footerText: 'Someone famous in ',
                    citeTitle: 'Source Title',
                    citeText: 'Source Title'
                },
                textWithClassMore: [
                    {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!'
                    }
                ],
                comments: [
                    {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [],
                    }, {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [
                            {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }, {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }
                        ]
                    }
                ],
            }, {
                imgSrcShort: 'http://placehold.it/750x300',
                postTitle: 'Post Title2',
                postTextShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                fullPageRef: 'post2.html',
                datePublishedShort: 'January 1, 2017',
                datePublished: 'January 1, 2018 at 12:00 PM',
                author: {
                    name: 'Start Bootstrap',
                    pageRef: '#',
                },
                imageSrc: 'http://placehold.it/900x300',
                textWithClass: [
                    {
                        class: 'lead',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }
                ],
                blockquote: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    footerText: 'Someone famous in ',
                    citeTitle: 'Source Title',
                    citeText: 'Source Title'
                },
                textWithClassMore: [
                    {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!'
                    }
                ],
                comments: [
                    {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [],
                    }, {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus ;lopkopkpo[kpo[k111111111111111111111odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [
                            {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }, {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }
                        ]
                    }
                ],
            }, {
                imgSrcShort: 'http://placehold.it/750x300',
                postTitle: 'Post Title3',
                postTextShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                fullPageRef: 'post3.html',
                datePublishedShort: 'January 1, 2017',
                datePublished: 'January 1, 2018 at 12:00 PM',
                author: {
                    name: 'Start Bootstrap',
                    pageRef: '#',
                },
                imageSrc: 'http://placehold.it/900x300',
                textWithClass: [
                    {
                        class: 'lead',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }
                ],
                blockquote: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    footerText: 'Someone famous in ',
                    citeTitle: 'Source Title',
                    citeText: 'Source Title'
                },
                textWithClassMore: [
                    {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!'
                    }
                ],
                comments: [
                    {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [],
                    }, {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [
                            {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }, {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }
                        ]
                    }
                ],
            }, {
                imgSrcShort: 'http://placehold.it/750x300',
                postTitle: 'Post Title4',
                postTextShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                fullPageRef: 'post4.html',
                datePublishedShort: 'January 1, 2017',
                datePublished: 'January 1, 2018 at 12:00 PM',
                author: {
                    name: 'Start Bootstrap',
                    pageRef: '#',
                },
                imageSrc: 'http://placehold.it/900x300',
                textWithClass: [
                    {
                        class: 'lead',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }
                ],
                blockquote: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    footerText: 'Someone famous in ',
                    citeTitle: 'Source Title',
                    citeText: 'Source Title'
                },
                textWithClassMore: [
                    {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!'
                    }
                ],
                comments: [
                    {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [],
                    }, {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [
                            {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }, {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }
                        ]
                    }
                ],
            }, {
                imgSrcShort: 'http://placehold.it/750x300',
                postTitle: 'Post Title5',
                postTextShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                fullPageRef: 'post5.html',
                datePublishedShort: 'January 1, 2017',
                datePublished: 'January 1, 2018 at 12:00 PM',
                author: {
                    name: 'Start Bootstrap',
                    pageRef: '#',
                },
                imageSrc: 'http://placehold.it/900x300',
                textWithClass: [
                    {
                        class: 'lead',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }
                ],
                blockquote: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    footerText: 'Someone famous in ',
                    citeTitle: 'Source Title',
                    citeText: 'Source Title'
                },
                textWithClassMore: [
                    {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!'
                    }
                ],
                comments: [
                    {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [],
                    }, {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [
                            {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }, {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }
                        ]
                    }
                ],
            }, {
                imgSrcShort: 'http://placehold.it/750x300',
                postTitle: 'Post Title6',
                postTextShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
                fullPageRef: 'post6.html',
                datePublishedShort: 'January 1, 2017',
                datePublished: 'January 1, 2018 at 12:00 PM',
                author: {
                    name: 'Start Bootstrap',
                    pageRef: '#',
                },
                imageSrc: 'http://placehold.it/900x300',
                textWithClass: [
                    {
                        class: 'lead',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!'
                    }
                ],
                blockquote: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    footerText: 'Someone famous in ',
                    citeTitle: 'Source Title',
                    citeText: 'Source Title'
                },
                textWithClassMore: [
                    {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?'
                    }, {
                        class: '',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!'
                    }
                ],
                comments: [
                    {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [],
                    }, {
                        userImageSrc: 'http://placehold.it/50x50',
                        userName: 'Commenter Name',
                        commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                        answerToComments: [
                            {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }, {
                                userImageSrc: 'http://placehold.it/50x50',
                                userName: 'Commenter Name',
                                commentText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                                answerToComments: [],
                            }
                        ]
                    }
                ],
            },
        ];

        const users = [
            {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User1',
                pageRef: '#',
            }, {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User2',
                pageRef: '#',
            }, {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User3',
                pageRef: '#',
            }, {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User4',
                pageRef: '#',
            }, {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User5',
                pageRef: '#',
            }, {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User6',
                pageRef: '#',
            }, {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User7',
                pageRef: '#',
            }, {
                imageSrc: 'http://placehold.it/50x50',
                name: 'User8',
                pageRef: '#',
            },
        ];

        const myMenu = [{
            text: 'Home',
            src: 'index.html',
        }, {
            text: 'Blog',
            src: 'blog.html',
        }, {
            text: 'Comments',
            src: 'comments.html',
        }, {
            text: 'Users',
            src: 'users.html',
        }];

        const titleIndex = 'Welcome to my blog!';
        const infoIndex = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.';

        const contentSideWidget = 'You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!';
        const leftContentCategoryForm = ['Web Design', 'HTML', 'Freebies'];
        const rightContentCategoryForm = ['JavaScript', 'CSS', 'Tutorials'];
        const titleBlog = 'Read article from my blog';
        const smallTitleBlog = 'You can read each post more detailed if you click "Read More"';
        const titleComments = 'Comments in my blog';
        const smallTitleComments = 'You can read post if you click "Read Post"';
        const titleUsers = 'Users in my blog';
        const smallTitleUsers = 'You can get more information about the user if you click "Read More"';
        const myBrand = {
            text: 'My blog',
            src: 'index.html'
        };

        const paginationButtonName = {
            left: 'Older',
            right: 'Newer'
        }

        const modalInfo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        const modalTitle = 'Welcome!';
        const modalTextButton = 'Read blog';

        switch (pageType) {
            case 'index':
                return this.renderIndexPage(myBrand, myMenu, titleIndex, infoIndex, leftContentCategoryForm,
                    rightContentCategoryForm, contentSideWidget, myFooterContent, modalInfo, modalTitle,
                    modalTextButton);
            case 'blog':
                return this.renderBlogPage(myBrand, myMenu, postsInfoArray, titleBlog, smallTitleBlog,
                    paginationButtonName, leftContentCategoryForm, rightContentCategoryForm, contentSideWidget,
                    myFooterContent);
            case 'comments':
                return this.renderCommentsPage(myBrand, myMenu, postsInfoArray, titleComments, smallTitleComments,
                    paginationButtonName, leftContentCategoryForm, rightContentCategoryForm, contentSideWidget,
                    myFooterContent);
            case 'users':
                return this.renderUsersPage(myBrand, myMenu, titleUsers, smallTitleUsers, paginationButtonName, users,
                    leftContentCategoryForm, rightContentCategoryForm, contentSideWidget, myFooterContent);
            default:
                if (indexPostPage < postsInfoArray.length) {
                    return this.renderPostPage(myBrand, myMenu, postsInfoArray[indexPostPage], leftContentCategoryForm,
                        rightContentCategoryForm, contentSideWidget, myFooterContent);
                } else {
                    console.log("Index PostPage is not correct");
                    return;
                }
        }
    }
}
