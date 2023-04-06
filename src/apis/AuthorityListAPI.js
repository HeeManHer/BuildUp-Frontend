import { SET_AUTHORITY } from "../modules/authority";
import AuthorityList from '../Pages/project/AuthorityList.json';

export function setAuthorityList() {

    return function (dispatch, getState) {
        dispatch({ type: SET_AUTHORITY, payload: AuthorityList });
    }
}