import React from "react";
import styled from "styled-components";

const Message = ({ msg }) => {
    return (
        <Wrapper>
            <div className='message'>{msg}</div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 50%;
    min-width: 300px;
    min-height: 200px;
    font-size: 25px;
    text-align: center;
    .message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default Message;
