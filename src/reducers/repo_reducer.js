import {
    SET_SEARCH,
    SET_REPOS,
    SET_REPOS_ERROR,
    SET_REPOS_LOADING
} from "../actions";

const repo_reducer = (state, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, searchTerm: action.payload };
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
                isLoading: true
            };
        case SET_REPOS_ERROR:
            return {
                ...state,
                error: true,
                isLoading: false
            };
        default:
            return state;
    }
};

export default repo_reducer;
