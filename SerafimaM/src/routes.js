
import FormComments from './components/FormComments';
import Articles from "components/Articles";
import CommentsList from "./components/CommentsList";



export default [
    {
        path: '/',
        component: Articles,
        exact: true,
    },

    {
        path: '/Comments',
        component: FormComments,
        exact: true,
    },
    {
        path: '/Comments',
        component: CommentsList,
        exact: true,
    },
]