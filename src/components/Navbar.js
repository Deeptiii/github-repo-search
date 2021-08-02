import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Navbar = () => {
    const handleToggleTheme = () => {
        document.body.classList.toggle("light");
    };
    return (
        <Wrapper>
            <img className='logo' src={logo} alt='logo' />
            <button className='toggle' onClick={handleToggleTheme}>
                Toggle theme
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background: var(--background-nav);
    min-width: 360px;

    .logo {
        height: 70%;
        padding-left: 20px;
    }
    .toggle {
        border: 1px solid black;
        border-radius: 6px;
        color: black;
        background: white;
        height: 30px;
        margin-right: 20px;
    }
    @media (min-width: 768px) {
    }
`;

export default Navbar;
