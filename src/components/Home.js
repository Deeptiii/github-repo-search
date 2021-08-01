import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RepoList from "./Repos/RepoList";
import { useRepoContext } from "../context/repo_context";
import Loader from "./Repos/Loader";
import Form from "./Form";

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
        setShowLoader(isLoading);
    }, [isLoading]);

    return (
        <Wrapper>
            <div className='form-container'>
                <Form
                    onSubmit={onSubmit}
                    searchTerm={searchTerm}
                    setSearch={setSearch}
                />
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
    }

    .repo-container {
        margin: 10px;
    }
`;

export default Home;
