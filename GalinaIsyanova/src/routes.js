import IndexInfo from 'components/IndexInfo';
import ListArticlesContainer from 'containers/ListArticlesContainer';
import CommentsContainer from 'containers/CommentsContainer';
import UsersContainer from 'containers/UsersContainer';
import FormArticleContainer from 'containers/FormArticleContainer';
import OneUserContainer from 'containers/OneUserContainer';

export default [{
    path: '/',
    component: IndexInfo,
    exact: true,
}, {
    path: '/blog',
    component: ListArticlesContainer,
    exact: true,
}, {
    path: '/comments',
    component: CommentsContainer,
    exact: true,
}, {
    path: '/users',
    component: UsersContainer,
    exact: true,
}, {
    path: '/users/:id',
    component: OneUserContainer,
    exact: true,
}, {
    path: '/blog/:id',
    component: FormArticleContainer,
    exact: true,
}]