import React from "react";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";

const Filter = () => {
    const {
        filters: { name, owner, star_gazers, watches, openIssue },
        updateFilters
    } = useFilterContext();

    return (
        <Wrapper>
            <div className='content'>
                <h3>Filters</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='form-control'>
                        <input
                            type='text'
                            name='name'
                            className='input filter-input'
                            value={name}
                            placeholder='Search by repo name'
                            onChange={updateFilters}
                        />
                    </div>
                    <div className='form-control'>
                        <input
                            type='text'
                            name='owner'
                            className='input filter-input'
                            value={owner}
                            placeholder='Search by owner'
                            onChange={updateFilters}
                        />
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;

    .form-control {
        margin-bottom: 1.25rem;
        width: 100%;

        .filter-input {
            width: 90%;
        }
    }

    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
        }
    }
`;

export default Filter;
