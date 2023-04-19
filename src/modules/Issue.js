import { createActions, handleActions } from "redux-actions";


/* 초기 state값 */
const initialState =
{
    data: [],
    pageInfo: {
        pageNo: 0,
        totalCount: 0,
        limit: 0,
        buttonAmount: 0,
        maxPage: 0,
        startPage: 0,
        endPage: 0,
        startRow: 0,
        endRow: 0
    }
};



/* 액션 타입 설정 */
export const CREATE_ISSUE = 'CREATE_ISSUE';
export const UPDATE_ISSUE = 'UPDATE_ISSUE';
export const SAVE_ISSUE = 'SAVE_ISSUE';
export const DELETE_ISSUE = "DELETE_ISSUE";
export const SEARCH_ISSUE = "SEARCH_ISSUE";

/*  액션 함수 */
const actions = createActions({
    [CREATE_ISSUE]: () => { },
    [UPDATE_ISSUE]: () => { },
    [SAVE_ISSUE]: () => { },
    [DELETE_ISSUE]: () => { },
    [SEARCH_ISSUE]: () => { },
});


/* 리듀서 함수 */
const IssueReducer = handleActions(
    {
        [SAVE_ISSUE]: (state, { payload }) => {
            return [...state, payload]
        },
        [CREATE_ISSUE]: (state, { payload }) => payload,
        [UPDATE_ISSUE]: (state, { payload }) => state.map(issue => issue.id == payload.id ? payload : issue),
        [DELETE_ISSUE]: (state, { payload }) => state.filter(issue => issue.id !== payload.id),
        [SEARCH_ISSUE]: (state, { payload }) => payload
    },
    initialState
);

export default IssueReducer;

