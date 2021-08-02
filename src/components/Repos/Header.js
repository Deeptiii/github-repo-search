import React from "react";
import styled from "styled-components";

const Header = ({ showOwner }) => {
    return (
        <Wrapper
            className='flex_align_center'
            style={{ justifyContent: "space-between" }}>
            {!showOwner && <p className='header-left'>Owner</p>}
            <p className='header-center'>Repository Info</p>
            <div className='header-right'>
                <span>Stats</span>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span
                        className='header-details'
                        style={{ marginRight: "40px" }}>
                        Stars
                    </span>
                    <span
                        className='header-details'
                        style={{ marginRight: "30px" }}>
                        Open Issues{" "}
                    </span>
                    <span className='header-details'>Watchers</span>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: none;

    @media (min-width: 650px) {
        .header-right {
            min-width: 415px;
            text-align: end;
            display: flex;
            flex-direction: column;

            .header-details {
                margin-right: 5px;
                padding: 5px 10px;
            }
        }
    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        position: sticky;
        top: 63px;
        background: var(--main-bg);
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid;
        z-index: 2;

        .header-left {
            min-width: 200px;
            text-align: center;
        }

        .header-center {
        }

        .header-right {
            min-width: 415px;
            text-align: center;
            display: flex;
            flex-direction: column;

            .header-details {
                margin-right: 5px;
                padding: 5px 10px;
            }
        }
    }
`;

export default Header;
