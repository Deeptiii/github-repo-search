import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import RepoCard from "./RepoCard";
import { useFilterContext } from "../../context/filter_context";
import Filter from "./Filter";

const RepoList = () => {
    const [owner, setOwner] = useState({ name: "", avatar_url: "" });
    const { filtered_repos: repoList } = useFilterContext();

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
    return (
        <Wrapper>
            {repoList?.length && (
                <div className='container'>
                    <div className='left_section'>
                        <Avatar className='avatar' src={owner.avatar_url} />
                        <div className='user-info-container'>
                            <span className='user-name'>{owner.name}</span>
                        </div>
                        <Filter />
                    </div>
                    <div className='right_section'>
                        <span>
                            {repoList.length ? repoList.length : 0} repositories
                        </span>
                        {repoList.length ? (
                            repoList.map((repo) => (
                                <RepoCard key={repo.id} repo={repo} />
                            ))
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
        gap: 3rem 1.5rem;
        margin: 2rem auto;

        .left_section {
            .avatar {
                width: 30%;
                height: fit-content;
            }

            .user-info-container {
                margin: 16px auto;
                .user-name {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 24px;
                }
            }
        }
    }
    @media (min-width: 768px) {
        .container {
            grid-template-columns: 200px 1fr;
        }
        .avatar {
            width: inherit !important;
        }
    }
`;

export default RepoList;
