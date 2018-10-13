import { createAction } from 'redux-actions';

// Actions
export const loadStarted = createAction('[Posts] Load started');
export const loadCompleted = createAction('[Posts] Load completed');
export const loadFailed = createAction('[Posts] Load failed');

// Side effect
export const load = () => (dispatch, getState) => {
  const state = getState();

  if(!state.comments.entities.length) {
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

