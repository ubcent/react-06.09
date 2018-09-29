import Counter from 'components/Counter';
import CommentsListContainer from 'containers/CommentsListContainer';
import CommentContainer from 'containers/CommentContainer';

export default [
  {
    path: '/',
    component: Counter,
    exact: true,
  },
  {
    path: '/comments',
    component: CommentsListContainer,
    exact: true,
  },
  {
    path: '/comments/:id',
    component: CommentContainer,
    exact: true,
  }
]