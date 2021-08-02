import React from "react";
import styled from "styled-components";

const Header = ({ showOwner }) => {
    return (
        <Wrapper
            className='flex_align_center'
            style={{ justifyContent: "space-between" }}>
            {!showOwner && <p className='header-left'>Owner</p>}
            <p className='header-center'>Repository Info</p>
            {/* <p className='header-right'>Stats</p> */}
            <div className='header-right'>
                <p className='header-right-item'>Stars</p>
                <p className='header-right-item'>Open issues</p>
                <p className='header-right-item'>Watchers</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: none;
    p:hover {
        color: var(--text-color-blue);
        background: var(--main-bg);
        font-weight: 600;
    }

    @media (min-width: 650px) {
        .header-right {
            min-width: 415px;
            text-align: end;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        position: sticky;
        top: 63px;
        background: var(--main-bg);
        border-top: 1px solid var(--btn-boder-color);
        border-bottom: 1px solid;
        z-index: 2;

        .header-left {
            min-width: 200px;
            text-align: center;
        }

        .header-center {
            min-width: 300px;
        }

        .header-right {
            min-width: 450px;
            text-align: center;
            display: flex;
            /* flex-direction: column; */
            .header-right-item {
                min-width: 150px;
            }

            .header-details {
                margin-right: 5px;
                padding: 5px 10px;
            }
        }
    }
`;

export default Header;
