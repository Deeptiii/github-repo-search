import React from "react";
import loader from "../../assets/loader.gif";
import styled from "styled-components";

const Loader = () => {
    return (
        <Wrapper>
            <img className='loader' src={loader} alt='' />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .loader {
        width: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default Loader;
