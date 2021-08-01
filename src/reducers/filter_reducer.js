import {
    LOAD_REPOS,
    UPDATE_FILTERS,
    FILTER_REPO,
    UPDATE_SORT,
    SORT_REPO,
    CLEAR_FILTERS
} from "../actions";

const filterRepo = (state) => {
    const { all_repos } = state;
    const {
        name: nam,
        owner,
        star_gazers,
        watchers,
        openIssue
    } = state.filters;
    let temp_repos = [...all_repos];
    if (nam) {
        temp_repos = temp_repos.filter(
            (repo) => repo.name.toLowerCase().indexOf(nam) !== -1
        );
    }
    if (owner) {
        temp_repos = temp_repos.filter(
            (repo) => repo.owner.login.toLowerCase().indexOf(owner) !== -1
        );
    }

    if (typeof star_gazers === "number") {
        temp_repos = temp_repos.filter(
            (repo) => repo.stargazers_count === star_gazers
        );
    }
    if (typeof openIssue === "number") {
        temp_repos = temp_repos.filter(
            (repo) => repo.open_issues_count === openIssue
        );
    }
    if (typeof watchers === "number") {
        temp_repos = temp_repos.filter((repo) => repo.watchers === watchers);
    }
    return temp_repos;
};

const compare = (list, propName, desc) => {
    if (desc) {
        return list.sort((a, b) => b[propName] - a[propName]);
    }
    return list.sort((a, b) => a[propName] - b[propName]);
};

const sortRepo = (state) => {
    const { sort, filtered_repos } = state;
    let temp_repo = [...filtered_repos];
    if (sort === "createdAt") {
        temp_repo = temp_repo.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }

    if (sort === "name-a") {
        temp_repo = temp_repo.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
        temp_repo = temp_repo.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sort === "stars-a") {
        temp_repo = compare(temp_repo, "stargazers_count");
    }
    if (sort === "stars-z") {
        temp_repo = compare(temp_repo, "stargazers_count", true);
    }
    if (sort === "issue-a") {
        temp_repo = compare(temp_repo, "open_issues_count");
    }
    if (sort === "issue-z") {
        temp_repo = compare(temp_repo, "open_issues_count", true);
    }
    if (sort === "watch-a") {
        temp_repo = compare(temp_repo, "watchers");
    }
    if (sort === "watch-z") {
        temp_repo = compare(temp_repo, "watchers", true);
    }
    return temp_repo;
};

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_REPOS:
            return {
                ...state,
                all_repos: action.payload,
                filtered_repos: action.payload,
                filters: {
                    ...state.filters,
                    name: "",
                    owner: "",
                    star_gazers: "",
                    watchers: "",
                    openIssue: ""
                }
            };
        case UPDATE_FILTERS:
            const { name, value } = action.payload;
            return { ...state, filters: { ...state.filters, [name]: value } };
        case FILTER_REPO:
            filterRepo(state);
            return { ...state, filtered_repos: filterRepo(state) };
        case UPDATE_SORT:
            return { ...state, sort: action.payload };
        case SORT_REPO:
            return { ...state, filtered_repos: sortRepo(state) };

        case CLEAR_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    name: "",
                    owner: "",
                    star_gazers: "",
                    watchers: "",
                    openIssue: ""
                }
            };
        default:
            return { ...state };
    }
};

export default reducer;
