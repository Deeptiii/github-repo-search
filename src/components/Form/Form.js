import React from "react";
import styled from "styled-components";
import { useRepoContext } from "../../context/repo_context";

const Form = () => {
    const { type, updateType, setSearch, searchTerm, getRepos, clearSearch } =
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
                placeholder='Search user...'
                value={searchTerm}
                onChange={(e) => setSearch(e.target.value)}
                spellCheck='false'
                data-testid='search-form-input'
            />

            <div className='flex_align_center'>
                <select
                    className='btn form-btn dropdown'
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
                    type='reset'
                    onClick={clearSearch}>
                    Clear
                </button>

                <button
                    className='btn form-btn'
                    type='submit'
                    data-testid='form-submit-btn'
                    onSubmit={onSubmit}>
                    Search
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 320px;

    .form-input {
        width: 91%;
        height: 30px;
        margin-top: 1rem;
    }

    .form-btn {
        margin-top: 1rem;
        margin-right: 1rem;
        height: 30px;
        flex: 0.25;

        &.dropdown {
            flex: 0.5;
        }
    }
    @media (min-width: 768px) {
        flex-direction: row;

        .form-input {
            width: 91%;
            margin-top: 0;
        }
        .form-btn {
            margin-left: 1rem;
            margin-right: 0;
            margin-top: 0;
        }
    }
`;

export default Form;