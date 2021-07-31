import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RepoList from "./Repos/RepoList";
import { useRepoContext } from "../context/repo_context";
import Loader from "./Repos/Loader";

const Home = () => {
    const { searchTerm, setSearch, getRepos, isLoading, error } =
        useRepoContext();
    const [showLoader, setShowLoader] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.length) {
            getRepos();
        }
    };

    useEffect(() => {
        console.log("test i home, is loading", isLoading);
        setShowLoader(isLoading);
    }, [isLoading]);

    console.log("facing error", error);

    return (
        <Wrapper>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <input
                        className='input form-input'
                        type='text'
                        placeholder='Search user repository...'
                        value={searchTerm}
                        onChange={(e) => setSearch(e.target.value)}
                        spellCheck='false'
                    />
                    <button
                        className='btn form-btn'
                        type='submit'
                        onSubmit={onSubmit}>
                        Search
                    </button>
                </form>
            </div>
            <div className='repo-container'>
                {showLoader ? <Loader /> : <RepoList />}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    .form-container {
        display: flex;
        padding: 10px;
        align-items: center;
        max-width: 1170px;
        margin: auto;

        form {
            display: flex;
            width: 100%;
            height: 30px;

            .form-input {
                width: 91%;
            }

            .form-btn {
                margin-left: 10px;
            }
        }
    }

    .repo-container {
        margin: 10px;
    }
`;

export default Home;
