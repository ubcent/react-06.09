import Home from 'components/Home';
import Posts from 'components/Posts';
import SingleArticleContainer from 'containers/SingleArticleContainer';


export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/posts',
        component: Posts,
        exact: true,
    },
    {
        path: '/posts/:id',
        component: SingleArticleContainer,
        exact: true,
    },
]
