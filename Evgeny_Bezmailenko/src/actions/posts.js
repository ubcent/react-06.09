import { createAction } from 'redux-actions';

// Actions
export const loadStarted = createAction('[Posts] Load started');
export const loadCompleted = createAction('[Posts] Load completed');
export const loadFailed = createAction('[Posts] Load failed');

// Side effect
export const load = () => (dispatch, getState) => {
    const state = getState();

    if(!state.posts.entities.length) {
        dispatch(loadStarted());
        fetch('/src/posts.json')
            .then((response) => response.json())
            .then((posts) => {
                dispatch(loadCompleted(posts));
            })
            .catch(() => {
                dispatch(loadFailed());
            });
    }
}