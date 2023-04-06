import { createActions, handleActions } from 'redux-actions';

const authorityList = [];

export const SET_AUTHORITY = 'authority/SET_AUTHORUTY';

const action = createActions({
    [SET_AUTHORITY]: () => { }
});


const authorityReducer = handleActions(
    {
        [SET_AUTHORITY]: (state, { payload }) => payload
    },
    authorityList
);

export default authorityReducer;
