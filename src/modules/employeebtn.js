import { createActions, handleActions } from "redux-actions";

const initialState = [
];

export const GET_EMPLOYEE = 'GET_EMPLOYEE';

const actions = createActions({
    [GET_EMPLOYEE]: () => { }
});

const employeebtnReducer = handleActions(
    {
        [GET_EMPLOYEE]: (state, { payload }) => payload,
    },
    initialState
)

export default employeebtnReducer;