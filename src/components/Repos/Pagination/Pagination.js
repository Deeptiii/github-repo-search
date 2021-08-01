import React from "react";
import styled from "styled-components";

const Pagination = ({ totalPages, paginate, currentPage }) => {
    if (totalPages === 1) {
        return null;
    }

    return (
        <Wrapper className='flex_align_center'>
            <ul className='pagination flex_align_center'>
                <li>
                    <button
                        data-testid='first'
                        className={`btn ${currentPage === 1 ? "disabled" : ""}`}
                        onClick={() => paginate(1)}
                        disabled={currentPage === 1}>
                        {"<<"}
                    </button>
                </li>
                <li>
                    <button
                        data-testid='prev'
                        className={`btn ${currentPage === 1 ? "disabled" : ""}`}
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}>
                        Prev
                    </button>
                </li>

                <li>
                    <button
                        data-testid='active'
                        className='btn active'
                        onClick={() => paginate(currentPage)}>
                        {currentPage}
                    </button>
                </li>

                <li>
                    <button
                        data-testid='next'
                        className={`btn ${
                            currentPage === totalPages ? "disabled" : ""
                        }`}
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}>
                        Next
                    </button>
                </li>
                <li>
                    <button
                        data-testid='last'
                        className={`btn ${
                            currentPage === totalPages ? "disabled" : ""
                        }`}
                        onClick={() => paginate(totalPages)}
                        disabled={currentPage === totalPages}>
                        {">>"}
                    </button>
                </li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: auto;

    .pagination {
        list-style: none;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        padding: 0;

        li {
            background: var(--btn-bg);
            border-radius: 6px;
            margin: 5px;

            button {
                float: left;
                padding: 8px 16px;
                text-decoration: none;
                color: inherit;
                border-radius: 6px;
                &.active {
                    background-color: var(--text-color-blue);
                    color: white;
                }
                &.disabled {
                    cursor: not-allowed;
                }
                &:hover:not(.active) {
                    background-color: #ddd;
                    color: black;
                }
            }
        }
    }
`;

export default Pagination;
