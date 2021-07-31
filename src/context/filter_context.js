import React, { useEffect, createContext, useContext, useReducer } from "react";
import { useRepoContext } from "./repo_context";
import { LOAD_REPOS, UPDATE_FILTERS } from "../actions";
import filterReducer from "../reducers/filter_reducer";

const initialState = {
    all_repos: [],
    filtered_repos: [],
    filters: {
        name: "",
        owner: "",
        star_gazers: "",
        watches: "",
        openIssue: ""
    }
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const { repoList } = useRepoContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_REPOS, payload: repoList });
    }, [repoList]);

    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // if (name === "price") {
        //     value = Number(value);
        // }
        // if (name === "shipping") {
        //     value = e.target.checked;
        // }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };

    return (
        <FilterContext.Provider value={{ ...state, updateFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
