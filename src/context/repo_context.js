import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/repo_reducer";
import {
    SET_SEARCH,
    SET_REPOS,
    SET_REPOS_ERROR,
    SET_REPOS_LOADING
} from "../actions";

const initialState = {
    repoList: [],
    owner: "",
    error: false,
    searchTerm: "",
    isLoading: false
};

const RepoContext = React.createContext();

export const RepoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getRepos = async () => {
        dispatch({ type: SET_REPOS_LOADING });
        try {
            const resp = await axios.get(
                `https://api.github.com/users/${state.searchTerm}/repos?per_page=100`
            );
            dispatch({
                type: SET_REPOS,
                payload: resp.data
            });
        } catch (err) {
            dispatch({
                type: SET_REPOS_ERROR
            });
        }
    };

    const setSearch = (term) => {
        dispatch({ type: SET_SEARCH, payload: term });
    };

    return (
        <RepoContext.Provider
            value={{
                ...state,
                getRepos,
                setSearch
            }}>
            {children}
        </RepoContext.Provider>
    );
};

export const useRepoContext = () => {
    return useContext(RepoContext);
};
