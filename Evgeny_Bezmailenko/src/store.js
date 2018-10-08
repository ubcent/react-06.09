import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const logger = (store) => (next) => (action) => {
    console.log('Action', action.type, action.payload);
    console.log('prevState', store.getState());

    const result = next(action);
    console.log('nextState', store.getState());

    return result;
};

import rootReducer from 'reducers';

export default createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
);

