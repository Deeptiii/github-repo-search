import React from "react";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";

const Filter = () => {
    const {
        filters: { name, owner, star_gazers, watchers, openIssue },
        updateFilters,
        clearFilters
    } = useFilterContext();

    const handlePreventScroll = (e) => {
        e.currentTarget.blur();
    };

    return (
        <Wrapper>
            <div className='content'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='content-header'>
                        <span>Filters</span>
                        <button
                            className='btn filter-btn-top'
                            type='button'
                            onClick={clearFilters}>
                            Clear Filters
                        </button>
                    </div>
                    <div className='form-control'>
                        <input
                            type='text'
                            name='name'
                            className='input filter-input'
                            value={name}
                            placeholder='Find a repository...'
                            onChange={updateFilters}
                        />
                    </div>
                    <div className='form-control'>
                        <input
                            type='number'
                            min='0'
                            name='star_gazers'
                            className='input filter-input'
                            value={star_gazers}
                            placeholder='Filter by stars...'
                            onChange={updateFilters}
                            onWheel={handlePreventScroll}
                        />
                    </div>
                    <div className='form-control'>
                        <input
                            type='number'
                            name='watchers'
                            min='0'
                            className='input filter-input'
                            value={watchers}
                            placeholder='Filter by watchers...'
                            onChange={updateFilters}
                            onWheel={handlePreventScroll}
                        />
                    </div>
                    <div className='form-control'>
                        <input
                            type='number'
                            name='openIssue'
                            min='0'
                            className='input filter-input'
                            value={openIssue}
                            placeholder='Filter by open issues...'
                            onChange={updateFilters}
                            onWheel={handlePreventScroll}
                        />
                    </div>

                    <button
                        className='btn filter-btn'
                        type='button'
                        onClick={clearFilters}>
                        Clear Filters
                    </button>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;

    .content {
        width: 100%;
        border-bottom: 1px solid var(--border-color);

        .content-header {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            width: 95%;
            span {
                font-size: 1.17rem;
                font-weight: bold;
            }
        }

        .form-control {
            margin-bottom: 1.25rem;
            width: 100%;

            .filter-input {
                width: 90%;
                margin-top: 5px;
            }
        }
        .filter-btn {
            display: none;
            width: 100%;
            height: 34px;
        }
    }

    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
            border-bottom: 0;

            .filter-btn-top {
                display: none;
            }

            .filter-btn {
                display: block;
            }
        }
    }
`;

export default Filter;
