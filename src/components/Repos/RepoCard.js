import React from "react";
import styled from "styled-components";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import { Avatar } from "@material-ui/core";

const updateToK = (number) => {
    if (number > 1000) {
        return Math.ceil(number / 1000) + "k";
    }
    return number;
};

const btnsArr = [
    {
        id: "1",
        icon: <StarBorderRoundedIcon />,
        text: "Stars"
    },
    {
        id: "2",
        icon: <ErrorOutlineRoundedIcon />,
        text: "Open issues"
    },
    {
        id: "3",
        icon: <VisibilityOutlinedIcon />,
        text: "Watchers"
    }
];

const RepoCard = ({ repo, showImage }) => {
    const {
        id,
        name,
        description: desc,
        stargazers_count,
        open_issues_count,
        html_url: url,
        owner: { login, avatar_url },
        watchers
    } = repo;
    const stats = [stargazers_count, open_issues_count, watchers];
    return (
        <Wrapper>
            <div className='repo-card-container'>
                {showImage && (
                    <div className='owner-info'>
                        <Avatar src={avatar_url} alt={login} />
                        <span className='owner-name'>{login}</span>
                    </div>
                )}
                <div className='repo-card-left'>
                    <div className='repo-info'>
                        <a
                            href={url}
                            target='_blank'
                            rel='noreferrer'
                            className='card-header'>
                            {name}
                        </a>
                        <div className='card-desc'>
                            <p className='card-desc-details'>
                                {desc?.substring(0, 55)}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='card-info flex_align_center'>
                    {btnsArr.map((btn, index) => (
                        <button
                            key={id + "_" + btn.id}
                            className='btn card-info-btn flex_align_center'>
                            <span className='card-info-btn-left flex_align_center'>
                                {btn.icon}
                                {btn.text}
                            </span>
                            <span className='count'>
                                {updateToK(stats[index])}
                            </span>
                        </button>
                    ))}
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

        width: 100%;
        justify-content: space-between;
        .owner-info {
            display: flex;
            align-items: center;
            margin-right: 1rem;
            margin-bottom: 0.7rem;
            min-width: 200px;
            font-size: 14px;
            .owner-name {
                margin-left: 10px;
            }
            .MuiAvatar-root {
                width: 30px;
                height: auto;
            }
        }

        .repo-card-left {
            width: 90vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 0.5;

            .repo-info {
                width: 50%;
                min-width: 300px;
                .card-header {
                    margin: 5px 0px;
                    font-weight: 600;
                    font-size: 16px;
                    color: var(--text-color-blue);
                    text-decoration: none;
                }
                .card-desc-details {
                    width: 100%;
                    margin: 5px 0px;
                    font-size: 12px;
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
            min-width: 360px;
            flex: 0.5;

            .card-info-btn {
                margin: 2px 10px 2px 0px;
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
                justify-content: space-between;

                .card-desc-details {
                    margin: 5px 0px;
                }
            }
            .card-info {
                display: flex;
                justify-content: flex-end;
                min-width: 415px;
            }
        }
    }
`;

export default RepoCard;
