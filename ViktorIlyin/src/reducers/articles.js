import { handleActions } from 'redux-actions';

import { loadArticles } from 'actions/articles';

const initialState = {
    entities: [],
    loading: false,
};

export default handleActions({
    [loadArticles]: (state, action) => {
        return {
            loading: false,
            entities: [
                {
                    'id': 0,
                    'title': 'stmple article Zero',
                    'dat': '09.08.18',
                    'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    'id': 1,
                    'title': 'stmple art ONE',
                    'dat': '09.08.19',
                    'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {
                    'id': 2,
                    'title': 'stmple art 4e',
                    'dat': '09.08.20',
                    'text': 'bla bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
            ]
        }
    }
}, initialState);