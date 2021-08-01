import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import { Avatar } from "@material-ui/core";
import axios from "axios";

const RepoCard = ({ repo, showImage }) => {
    const [watchers, setWatchers] = useState(0);
    const {
        name,
        description: desc,
        stargazers_count,
        open_issues_count,
        html_url: url,
        owner: { login, avatar_url },
        subscribers_url
    } = repo;

    useEffect(() => {
        axios.get(subscribers_url).then((res) => setWatchers(res.data.length));
    }, [subscribers_url]);

    return (
        <Wrapper>
            <div className='repo-card-container'>
                <div className='repo-card-left'>
                    {showImage && (
                        <div className='owner-info'>
                            <Avatar src={avatar_url} alt={login} />
                            <span className='owner-name'>{login}</span>
                        </div>
                    )}
                    <div className='repo-info'>
                        <a
                            href={url}
                            target='_blank'
                            rel='noreferrer'
                            className='card-header card-desc-details'>
                            {name}
                        </a>
                        <div className='card-desc'>
                            <p className='card-desc-details'>{desc}</p>
                        </div>
                    </div>
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

    .repo-card-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 12px;
        width: 100%;
        justify-content: space-between;

        .repo-card-left {
            max-width: 400px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .owner-info {
                display: flex;
                align-items: center;
                margin-right: 10px;

                .owner-name {
                    margin-left: 10px;
                }
                .MuiAvatar-root {
                    width: 30px;
                    height: auto;
                }
            }

            .repo-info {
                width: 50%;
                min-width: 300px;
                .card-header {
                    margin: 0;
                    font-weight: 600;
                    font-size: 16px;
                    color: var(--text-color-blue);
                    text-decoration: none;
                }
                .card-desc-details {
                    width: 100%;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    display: inline-block;
                    text-overflow: ellipsis;
                }

                .card-desc {
                    color: #8b949e;
                }
            }
        }
        .card-info {
            font-size: 1rem;
            flex-wrap: wrap;
            min-width: 415px;

            .card-info-btn {
                margin: 2px 5px;
                padding: 0px 3px;
                font-size: 0.7rem;

                .MuiSvgIcon-root {
                    font-size: 0.9rem;
                    margin-right: 5px;
                }

                .card-info-btn-left {
                    padding-right: 10px;
                    white-space: nowrap;
                }
                .count {
                    padding: 5px 7px;
                    border-left: 1px solid var(--btn-boder-color);
                }
            }
        }
    }

    @media (min-width: 768px) {
        .repo-card-container {
            flex-direction: row;
            align-items: center;

            .repo-card-left {
                flex-direction: row;
            }
            .card-info {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
`;

export default RepoCard;
