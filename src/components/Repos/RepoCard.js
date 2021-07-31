import React from "react";
import styled from "styled-components";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";

const RepoCard = ({ repo }) => {
    const {
        name,
        description: desc,
        stargazers_count,
        open_issues_count,
        watchers
    } = repo;
    return (
        <Wrapper>
            <div>
                <h3 className='card-header'>{name}</h3>
                <div className='card-desc'>
                    <p>{desc}</p>
                </div>
                <div className='card-info flex_align_center'>
                    <button className='btn card-info-btn flex_align_center'>
                        <span className='card-info-btn-left flex_align_center'>
                            <StarBorderRoundedIcon />
                            Stars
                        </span>
                        <span className='count'>{stargazers_count}</span>
                    </button>
                    <button className='btn card-info-btn flex_align_center'>
                        <span className='card-info-btn-left flex_align_center'>
                            <ErrorOutlineRoundedIcon />
                            Open issues
                        </span>
                        <span className='count'>{open_issues_count}</span>
                    </button>
                    <button className='btn card-info-btn flex_align_center'>
                        <span className='card-info-btn-left flex_align_center'>
                            <VisibilityOutlinedIcon />
                            Watchers
                        </span>
                        <span className='count'>{watchers}</span>
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 0px;
    border-top: 1px solid var(--btn-boder-color);

    .card-header {
        margin: 0;
        font-weight: 600;
        color: var(--text-color-blue);
    }

    .card-desc {
        font-size: 14px;
    }

    .card-info {
        font-size: 1rem;

        .card-info-btn {
            margin-right: 10px;
            padding: 5px 10px;

            .MuiSvgIcon-root {
                font-size: 1.2rem;
                margin-right: 5px;
            }

            .card-info-btn-left {
                padding-right: 10px;
            }
            .count {
                padding: 5px 7px;
                border-left: 1px solid var(--btn-boder-color);
            }
        }
    }
`;

export default RepoCard;
