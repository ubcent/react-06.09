import Home from 'components/Home';
import Posts from 'components/Posts';
import BlogPost from "components/BlogPost";


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
        component: BlogPost,
        exact: true,
    }
]
