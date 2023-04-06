import { createActions, handleActions } from 'redux-actions';

const userList = [];

export const GET_USER = 'user/GET_USER';
export const SET_USER = 'user/SET_USER';
export const CHANGE_USER = 'user/CHANGE_USER';
export const SAVE_USER = 'user/SAVE_USER';
export const DELETE_USER = 'user/DELETE_USER';
export const SEARCH_USER = 'user/SEARCH_USER';


const action = createActions({
    [GET_USER]: () => { },
    [SET_USER]: () => { },
    [CHANGE_USER]: () => { },
    [SAVE_USER]: () => { },
    [DELETE_USER]: () => { },
    [SEARCH_USER]: () => { },
});

const userReducer = handleActions(
    {
        [GET_USER]: (state, { payload }) => state,
        [SET_USER]: (state, { payload }) => payload,
        [CHANGE_USER]: (state, { payload }) => state.map(user => user.name === payload.name ? { ...payload } : user),
        [SAVE_USER]: (state, { payload }) => [...state, payload],
        [DELETE_USER]: (state, { payload }) => {
            for (let k = 0; k < payload.length; k++) {
                state = state.filter(user => user.no !== payload[k]);
            }

            return state;
        },
        [SEARCH_USER]: (state, { payload }) => {

            console.log(payload);

            const result =
                state.filter(user => user.no == payload) ||
                state.filter(user => user.name == payload) ||
                state.filter(user => user.email == payload) ||
                state.filter(user => user.authority == payload);
            console.log(result);

            return result;
        }


    },
    userList
);

export default userReducer;

