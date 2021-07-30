import React, { useState } from "react";
import styled from "styled-components";

const Home = () => {
    const [user, setUser] = useState("");
    const [repos, setRepos] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (user.length) {
            fetch(`https://api.github.com/users/${user}/repos`)
                .then((res) => res.json())
                .then((result) => {
                    setRepos(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <Wrapper>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <input
                        className='form-input'
                        type='text'
                        placeholder='Search user repo'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <button
                        className='form-btn'
                        type='submit'
                        onSubmit={onSubmit}>
                        Search
                    </button>
                </form>
            </div>
            <div className='repo-container'>
                {repos.length ? repos.length : 0} repositories
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
                background: var(--main-bg);
                border: 1px solid #21262d;
                border-radius: 6px;
                padding: 10px;
                color: white;

                &:focus-visible {
                    border-color: #388bfd;
                    box-shadow: 0 0 0 3px #0c2d6b;
                    outline: none;
                }
            }

            .form-btn {
                margin-left: 10px;
                background: #21262d;
                border: 1px solid;
                border-color: #30363d;
                border-radius: 6px;
                padding: 5px 16px;
                color: var(--text-color);
            }
        }
    }

    .repo-container {
        margin: 10px;
    }
`;

export default Home;
