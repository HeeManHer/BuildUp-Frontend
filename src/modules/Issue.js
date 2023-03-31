import { createActions, handleActions } from "redux-actions";


/* 초기 state값 */
const initialState = [

];

/* 액션 타입 설정 */
export const CREATE_ISSUE = 'CREATE_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const SAVE_ISSUE = 'SAVE_ISSUE';

/*  액션 함수 */
const actions = createActions({
    [CREATE_ISSUE]: () => { },
    [UPDATE_ISSUE]: () => { },
    [SAVE_ISSUE]: () => { },
});


/* 리듀서 함수 */
const IssueReducer = handleActions(
    {
        [SAVE_ISSUE]: (state, { payload }) => [...state, payload],
        [CREATE_ISSUE]: (state, { payload }) => payload,
        [UPDATE_ISSUE]: (state, { payload }) => {
            state.map(issue =>
                issue.id == payload.id ? payload : issue)
        }
    },
    initialState
);

export default IssueReducer;

