import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RepoList from "../Repos/RepoList";
import { useRepoContext } from "../../context/repo_context";
import Loader from "../Repos/Loader";
import Form from "../Form/Form";

const Home = () => {
    const { isLoading } = useRepoContext();
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(isLoading);
    }, [isLoading]);

    return (
        <Wrapper>
            <div className='form-container'>
                <Form />
            </div>
            <div className='repo-container'>
                {showLoader ? <Loader /> : <RepoList data-testid='repo-list' />}
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
        border-top: 1px solid var(--border-color);
        margin: 10px;
    }
`;

export default Home;
