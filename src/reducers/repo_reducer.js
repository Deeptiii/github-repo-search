import {
    SET_SEARCH,
    SET_REPOS,
    SET_TYPE,
    SET_REPOS_ERROR,
    SET_REPOS_LOADING,
    RESET_SEARCH
} from "../actions";
import { initialState } from "../context/repo_context";

const repo_reducer = (state, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, searchTerm: action.payload };
        case SET_TYPE:
            return { ...state, type: action.payload };
        case SET_REPOS:
            return {
                ...state,
                repoList: action.payload,
                error: false,
                isLoading: false
            };
        case SET_REPOS_LOADING:
            return {
                ...state,
                error: false,
                isLoading: true,
                repoList: []
            };
        case SET_REPOS_ERROR:
            let msg = "";
            if (action.payload?.data?.message) {
                msg = action.payload.data.message.split("(")[0];
            }
            return {
                ...state,
                error: true,
                errorMessage: msg,
                isLoading: false
            };
        case RESET_SEARCH:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default repo_reducer;
