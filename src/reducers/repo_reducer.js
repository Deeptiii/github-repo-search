import { SET_SEARCH, SET_REPOS, SET_REPOS_ERROR } from "../actions";

const repo_reducer = (state, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, searchTerm: action.payload };
        case SET_REPOS:
            return { ...state, repoList: action.payload, error: false };
        default:
            return state;
    }
};

export default repo_reducer;
