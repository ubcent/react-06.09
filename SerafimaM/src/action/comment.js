import { createAction } from 'redux-actions';


export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');


export const load = () => (dispatch, getState) => {
    const state = getState();

    if(!state.comments.entities.length) {
        dispatch(loadStarted());
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => response.json())
            .then((comments) => {
                dispatch(loadCompleted(comments));
            })
            .catch(() => {
                dispatch(loadFailed());
            });
    }
};