import React from "react";
import styled from "styled-components";
import { useRepoContext } from "../../context/repo_context";

const Form = () => {
    const { type, updateType, setSearch, searchTerm, getRepos } =
        useRepoContext();

    const onSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.length) {
            getRepos();
        }
    };

    return (
        <Wrapper onSubmit={onSubmit}>
            <input
                className='input form-input'
                type='text'
                placeholder='Search user repository...'
                value={searchTerm}
                onChange={(e) => setSearch(e.target.value)}
                spellCheck='false'
                data-testid='search-form-input'
            />

            <select
                className='btn dropdown'
                name='type'
                id='type'
                value={type}
                onChange={(e) => updateType(e.target.value)}>
                <option value='' disabled>
                    Select type
                </option>
                <option value='owner'>Owner</option>
                <option value='member'>Member</option>
                <option value='all'>All</option>
            </select>

            <button
                className='btn form-btn'
                type='submit'
                data-testid='form-submit-btn'
                onSubmit={onSubmit}>
                Search
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.form`
    display: flex;
    width: 100%;
    height: 30px;

    .form-input {
        width: 91%;
    }

    .form-btn,
    .dropdown {
        margin-left: 10px;
    }
`;

export default Form;
