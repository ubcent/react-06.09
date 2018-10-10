import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Load Started');
export const loadCompleted = createAction('[Comments] Load Completed');
export const loadFailed = createAction('[Comments] Load Failed');

export const load = () => (dispatch, getState) => {
    const state = getState();

    if (!state.comments.entities.length) {
        dispatch(loadStarted());
        fetch('http://localhost:3000/api/comments')
            .then((response) => response.json())
            .then((comments) => {
                dispatch(loadCompleted(comments));
            })
            .catch(() => {
                dispatch(loadFailed());
            });
    }
}