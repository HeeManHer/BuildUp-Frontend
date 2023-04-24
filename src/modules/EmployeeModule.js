import { createActions, handleActions } from 'redux-actions';

const initialState = {};

export const POST_LOGIN = 'login/POST_LOGIN';
export const GET_EMPLOYEE = 'mypage/GET_EMPLOYEE';
export const POST_FINDPWD = 'login/POST_FINDPWD';
export const PUT_EMPLOYEE = 'changepassword/PUT_EMPLOYEE';

const actions = createActions({
    [POST_LOGIN]: () => {},
    [GET_EMPLOYEE]: () => {},
    [POST_FINDPWD]: () => {},
    [PUT_EMPLOYEE]: () => {}
});

const employeeReducer = handleActions({
    [POST_LOGIN]: (state, {payload}) => {
        return payload;
    },

    [GET_EMPLOYEE]: (state, {payload}) => {
        return payload;
    },

    [POST_FINDPWD]: (state, {payload}) => {
        return payload;
    },
    [PUT_EMPLOYEE]: (state, {payload}) => {
        return payload;
    },
},
initialState

);

export default employeeReducer; 