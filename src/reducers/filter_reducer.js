import { LOAD_REPOS, UPDATE_FILTERS } from "../actions";

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_REPOS:
            return {
                ...state,
                all_repos: action.payload,
                filtered_repos: action.payload
            };
        case UPDATE_FILTERS:
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
