import React, { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/repo_reducer";
import { SET_SEARCH, SET_REPOS, SET_REPOS_ERROR } from "../actions";

const initialState = {
    repoList: [],
    owner: "",
    error: false,
    searchTerm: ""
};

const RepoContext = React.createContext();

export const RepoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getRepos = async () => {
        try {
            const resp = await axios.get(
                `https://api.github.com/users/${state.searchTerm}/repos?per_page=100`
            );
            dispatch({
                type: SET_REPOS,
                payload: resp.data
            });
        } catch (err) {
            console.error(err);
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
