import { combineReducers } from 'redux';
import commentsReducer from './comments';
import usersReducer from './users';
import postsReducer from './posts';

export default combineReducers({
    comments: commentsReducer,
    users: usersReducer,
    posts: postsReducer,
});