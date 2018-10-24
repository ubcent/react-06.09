import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Posts] Load Started');
export const loadCompleted = createAction('[Posts] Load Completed');
export const loadFailed = createAction('[Posts] Load Failed');

export const load = () => (dispatch, getState) => {
    const state = getState();

    if (!state.posts.entities.length) {
        dispatch(loadStarted());
        fetch('http://localhost:3000/api/posts')
            .then((response) => response.json())
            .then((posts) => {
                dispatch(loadCompleted(posts));
            })
            .catch(() => {
                dispatch(loadFailed());
            });
    }
}