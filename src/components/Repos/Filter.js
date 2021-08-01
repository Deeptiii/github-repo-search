import React, { useState } from "react";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";

const Filter = ({ showOwner }) => {
    const {
        filters: { name, owner, star_gazers, watchers, openIssue },
        updateFilters,
        clearFilters
    } = useFilterContext();

    const [showFilters, setShowFilters] = useState(false);

    const toggleShowFilters = () => {
        setShowFilters(!showFilters);
    };

    const handlePreventScroll = (e) => {
        e.currentTarget.blur();
    };
    return (
        <Wrapper showOwner={showOwner}>
            <div className='content'>
                <div className='content-header'>
                    <span
                        className='filter-span'
                        onClick={toggleShowFilters}
                        title='Open Filters Panel'>
                        Filters
                    </span>
                    {showFilters && (
                        <button
                            className='btn filter-btn-top'
                            type='button'
                            onClick={clearFilters}>
                            Clear Filters
                        </button>
                    )}
                </div>
                {showFilters && (
                    <form onSubmit={(e) => e.preventDefault()}>
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
                                type='text'
                                name='owner'
                                className='input filter-input'
                                value={owner}
                                placeholder='Find by owner...'
                                onChange={updateFilters}
                            />
                        </div>
                        <div className='form-control'>
                            <input
                                type='number'
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
                                className='input filter-input'
                                value={openIssue}
                                placeholder='Filter by open issues...'
                                onChange={updateFilters}
                                onWheel={handlePreventScroll}
                            />
                        </div>
                    </form>
                )}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    border-top: 1px solid var(--btn-boder-color);
    background: var(--main-bg);

    .content {
        width: 100%;
        border-bottom: 1px solid var(--border-color);

        .content-header {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
            width: 100%;
            .filter-span {
                font-size: 1.17rem;
                font-weight: bold;
                cursor: pointer;
                padding: 5px 10px;
                border-radius: 6px;
            }
        }

        form {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            .form-control {
                margin-bottom: 1.25rem;
                margin-right: 0.5rem;
                min-width: 145px;
                .filter-input {
                    width: inherit;
                    margin-top: 5px;
                }

                .filter-btn {
                    display: none;
                    width: ${(props) => (props.showOwner ? "100%" : "unset")};
                    height: 34px;
                }
            }
        }
    }

    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
            border-bottom: 0;

            form {
                .form-control {
                    margin-bottom: 1.25rem;

                    .filter-btn {
                        display: block;
                    }
                }
            }
        }
    }
`;

export default Filter;
