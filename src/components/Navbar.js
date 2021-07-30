import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Navbar = () => {
    return (
        <Wrapper>
            <img className='logo' src={logo} alt='logo' />
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: hsl(215deg 21% 11%);

    .logo {
        height: 70%;
    }
`;

export default Navbar;
