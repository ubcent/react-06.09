import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Users] Load Started');
export const loadCompleted = createAction('[Users] Load Completed');
export const loadFailed = createAction('[Users] Load Failed');

export const load = () => (dispatch, getState) => {
    const state = getState();

    if (!state.users.entities.length) {
        dispatch(loadStarted());
        fetch('http://localhost:3000/api/users')
            .then((response) => response.json())
            .then((users) => {
                console.log(users);
                dispatch(loadCompleted(users));
            })
            .catch(() => {
                dispatch(loadFailed());
            });
    }
}