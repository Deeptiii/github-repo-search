import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import RepoCard from "./RepoCard";
import { useFilterContext } from "../../context/filter_context";
import Filter from "./Filters/Filter";
import Sort from "./Sort";
import Pagination from "./Pagination/Pagination";
import { useRepoContext } from "../../context/repo_context";
import Message from "../Message";
import Header from "./Header";

const RepoList = () => {
    const [owner, setOwner] = useState({ name: "", avatar_url: "" });
    const [showOwner, setShowOwner] = useState(false);
    const { filtered_repos: repoList } = useFilterContext();
    const { repoList: allRepo, type, error, errorMessage } = useRepoContext();

    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [repoPerPage] = useState(10);

    useEffect(() => {
        if (!repoList || !repoList.length) {
            return;
        }
        setRepos(repoList);
        if (type === "owner") {
            const { login, avatar_url } = repoList[0].owner;
            setOwner({
                name: login,
                avatar_url
            });
            setShowOwner(true);
        } else {
            setShowOwner(false);
        }
        setCurrentPage(1);
    }, [repoList]);

    if (allRepo && !allRepo.length) {
        let msg = "Search for a valid user to get repository list";
        if (error) {
            msg =
                "We are facing error to fetch data for this user, please try later";
        }
        return <Message msg={msg} />;
    }

    //Get current Repos
    const indexOfLastRepo = currentPage * repoPerPage;
    const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
    const totalPages = Math.ceil(repos.length / repoPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Wrapper showOwner={showOwner} data-testid='repo-list'>
            <div className='container'>
                {showOwner && (
                    <div className='left_section'>
                        <div className='user-info'>
                            <Avatar className='avatar' src={owner.avatar_url} />
                            <div className='user-info-container'>
                                <span className='user-name'>{owner.name}</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className='right_section'>
                    <Sort
                        className='sort-container'
                        indexOfLastRepo={indexOfLastRepo}
                        indexOfFirstRepo={indexOfFirstRepo}
                        totalRepos={repos.length}
                    />
                    <Filter showOwner={showOwner} />
                    {repoList?.length ? (
                        <>
                            <Header showOwner={showOwner} />
                            {currentRepos.map((repo) => (
                                <RepoCard
                                    showImage={!showOwner}
                                    key={repo.id}
                                    repo={repo}
                                />
                            ))}
                            <Pagination
                                repoPerPage={repoPerPage}
                                totalPages={totalPages}
                                paginate={paginate}
                                currentPage={currentPage}
                                showOwner={showOwner}
                            />
                        </>
                    ) : (
                        <Message msg='No repository found for the given filter' />
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .container {
        display: grid;
        gap: 0rem 1.5rem;
        margin: 1rem auto;
        max-width: 1170px;

        .left_section {
            .user-info {
                display: flex;
                align-items: flex-start;
                position: sticky;
                top: 2rem;
                .avatar {
                    width: 30%;
                    height: fit-content;
                }

                .user-info-container {
                    margin: 16px 20px;
                    .user-name {
                        font-size: 25px;
                        font-style: normal;
                        font-weight: 300;
                        line-height: 30px;
                        display: inline-block;
                        word-break: break-word;
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
                white-space: nowrap;
                min-width: 360px;
                border-top: 1px solid var(--btn-boder-color);
                margin-top: 20px;
            }
        }
    }

    @media (min-width: 650px) {
        .container {
            .right_section {
                .sort-container {
                    flex-direction: row;
                    align-items: center;
                    padding-bottom: 10px;
                }
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
                max-width: ${(props) => (props.showOwner ? "970px" : "1170px")};
                width: ${(props) => (props.showOwner ? "75vw" : "100vw")};

                .sort-container {
                    flex-direction: row;
                    align-items: center;
                    padding-bottom: 10px;
                    border-top: 0;
                    margin-top: 0px;
                }
            }
        }
    }
`;

export default RepoList;
