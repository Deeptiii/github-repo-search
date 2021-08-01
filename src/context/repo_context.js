import React, { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/repo_reducer";
import {
    SET_SEARCH,
    SET_REPOS,
    SET_TYPE,
    SET_REPOS_ERROR,
    SET_REPOS_LOADING,
    RESET_SEARCH
} from "../actions";

export const initialState = {
    repoList: [],
    owner: "",
    type: "owner",
    error: false,
    errorMessage: "",
    searchTerm: "",
    isLoading: false
};

export const RepoContext = React.createContext();

export const RepoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getRepos = async () => {
        dispatch({ type: SET_REPOS_LOADING });
        try {
            const resp = await axios.get(
                `https://api.github.com/users/${state.searchTerm}/repos`,
                {
                    params: {
                        per_page: 100,
                        type: state.type
                    }
                }
            );
            dispatch({
                type: SET_REPOS,
                payload: resp.data
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: SET_REPOS_ERROR,
                payload: err.response
            });
        }
    };

    const setSearch = (term) => {
        dispatch({ type: SET_SEARCH, payload: term });
    };

    const updateType = (value) => {
        dispatch({ type: SET_TYPE, payload: value });
    };
    const clearSearch = () => {
        dispatch({ type: RESET_SEARCH });
    };

    return (
        <RepoContext.Provider
            value={{
                ...state,
                getRepos,
                setSearch,
                updateType,
                clearSearch
            }}>
            {children}
        </RepoContext.Provider>
    );
};

export const useRepoContext = () => {
    return useContext(RepoContext);
};
