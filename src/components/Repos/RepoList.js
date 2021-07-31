import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import RepoCard from "./RepoCard";
import { useFilterContext } from "../../context/filter_context";
import Filter from "./Filter";
import Sort from "./Sort";
import { useRepoContext } from "../../context/repo_context";
import Loader from "./Loader";

const RepoList = () => {
    const [owner, setOwner] = useState({ name: "", avatar_url: "" });
    const { filtered_repos: repoList } = useFilterContext();
    const { isLoading, repoList: allRepo } = useRepoContext();

    useEffect(() => {
        if (!repoList || !repoList.length) {
            return;
        }
        const { login, avatar_url } = repoList[0].owner;
        setOwner({
            name: login,
            avatar_url
        });
    }, [repoList]);

    if (allRepo && !allRepo.length) {
        return <div>Search for a Valid user to get repository list</div>;
    }

    return (
        <Wrapper>
            {repoList.length && (
                <div className='container'>
                    <div className='left_section'>
                        <div className='user-info'>
                            <Avatar className='avatar' src={owner.avatar_url} />
                            <div className='user-info-container'>
                                <span className='user-name'>{owner.name}</span>
                            </div>
                        </div>
                        <Filter />
                    </div>
                    <div className='right_section'>
                        {repoList.length ? (
                            <>
                                <Sort className='sort-container' />
                                {repoList.map((repo) => (
                                    <RepoCard key={repo.id} repo={repo} />
                                ))}
                            </>
                        ) : (
                            <div>Please search for repos</div>
                        )}
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .container {
        display: grid;
        gap: 0rem 1.5rem;
        margin: 2rem auto;
        max-width: 1170px;

        .left_section {
            .user-info {
                display: flex;
                align-items: flex-start;
                .avatar {
                    width: 30%;
                    height: fit-content;
                }

                .user-info-container {
                    margin: 16px 0;
                    .user-name {
                        font-size: 30px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 24px;
                    }
                }
            }
        }
        .right_section {
            width: 92vw;

            .sort-container {
                flex-direction: column;
                align-items: flex-start;
                padding-bottom: 10px;
            }
        }
    }
    @media (min-width: 768px) {
        .container {
            grid-template-columns: 200px 1fr;
            gap: 3rem 1.5rem;

            .user-info {
                display: flex;
                flex-direction: column;

                .avatar {
                    width: inherit !important;
                }
                .user-info-container {
                    margin: 16px 0;
                }
                .user-name {
                    font-size: 20px;
                }
            }

            .right_section {
                max-width: 970px;
                width: 70vw;

                .sort-container {
                    flex-direction: row;
                    align-items: center;
                    padding-bottom: 10px;
                }
            }
        }
    }
`;

export default RepoList;
