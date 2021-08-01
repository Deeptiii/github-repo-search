import React, { useEffect, createContext, useContext, useReducer } from "react";
import { useRepoContext } from "./repo_context";
import {
    LOAD_REPOS,
    UPDATE_FILTERS,
    FILTER_REPO,
    UPDATE_SORT,
    SORT_REPO,
    CLEAR_FILTERS
} from "../actions";
import filterReducer from "../reducers/filter_reducer";

export const initialFilterState = {
    all_repos: [],
    filtered_repos: [],
    sort: "name-a",
    filters: {
        name: "",
        owner: "",
        star_gazers: "",
        watchers: "",
        openIssue: ""
    }
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const { repoList } = useRepoContext();

    const [state, dispatch] = useReducer(filterReducer, initialFilterState);

    useEffect(() => {
        dispatch({ type: LOAD_REPOS, payload: repoList });
    }, [repoList]);

    useEffect(() => {
        dispatch({ type: FILTER_REPO });
        dispatch({ type: SORT_REPO });
    }, [repoList, state.filters, state.sort]);

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (
            name === "openIssue" ||
            name === "star_gazers" ||
            name === "watchers"
        ) {
            value = Number(value);
        }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };

    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({ type: UPDATE_SORT, payload: value });
    };

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS });
    };

    return (
        <FilterContext.Provider
            value={{ ...state, updateFilters, updateSort, clearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
