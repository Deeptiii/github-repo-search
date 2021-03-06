import React from "react";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";

const Sort = ({ className, indexOfFirstRepo, totalRepos, indexOfLastRepo }) => {
    const { filtered_repos, sort, updateSort } = useFilterContext();

    return (
        <Wrapper className={className}>
            <p>Total {filtered_repos?.length} repositories found</p>
            <p>
                <span className='pretty-span'>
                    {indexOfFirstRepo + 1}-
                    {Math.min(indexOfLastRepo, totalRepos)} of {totalRepos}
                </span>
            </p>
            <form>
                <label htmlFor='sort'>Sort By</label>
                <select
                    className='sort btn pretty-span'
                    name='sort'
                    id='sort'
                    value={sort}
                    onChange={updateSort}>
                    <option value='name-a'>Name (ascending)</option>
                    <option value='name-z'>Name (descending)</option>
                    <option value='stars-a'>Stars (ascending)</option>
                    <option value='stars-z'>Stars (descending)</option>
                    <option value='issue-a'>Open issues (ascending)</option>
                    <option value='issue-z'>Open issues (descending)</option>
                    <option value='watch-a'>Watchers (ascending)</option>
                    <option value='watch-z'>Watchers (descending)</option>
                </select>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    background: var(--main-bg);
    position: sticky;
    top: 0;
    z-index: 2;
    form {
        margin: 1rem 0;
        .sort {
            height: 30px;
            outline: none;
            margin-left: 10px;
        }
    }

    .pretty-span {
        padding: 5px 10px;
        border-radius: 6px;
    }
`;

export default Sort;
