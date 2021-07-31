import React from "react";
import styled from "styled-components";
import RepoList from "./Repos/RepoList";
import { useRepoContext } from "../context/repo_context";

const Home = () => {
    // const [user, setUser] = useState("");
    // const [repos, setRepos] = useState([]);
    const { searchTerm, setSearch, getRepos } = useRepoContext();

    const onSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.length) {
            getRepos();
        }
    };

    return (
        <Wrapper>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <input
                        className='input form-input'
                        type='text'
                        placeholder='Search user repo'
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
                <RepoList />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    .form-container {
        display: flex;
        padding: 10px;
        align-items: center;

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
