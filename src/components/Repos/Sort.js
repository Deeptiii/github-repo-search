import React from "react";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";

const Sort = ({ className }) => {
    const { filtered_repos, sort, updateSort } = useFilterContext();

    return (
        <Wrapper className={className}>
            <p>{filtered_repos?.length} repositories</p>
            <form>
                <label htmlFor='sort'>Sort By</label>
                <select
                    className='sort btn'
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
    .sort {
        background: var(--btn-bg);
        color: var(--text-color);
        height: 30px;
        outline: none;
        border-radius: 6px;
        border: 1px solid var(--btn-boder-color);
        margin-left: 10px;
    }

    @media (min-width: 768px) {
    }
`;

export default Sort;
