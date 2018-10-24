import { createAction } from 'redux-actions';

// Actions
export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');

// Side effect
export const load = () => (dispatch, getState) => {
    const state = getState();

    if(!state.comments.entities.length) {
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
};

