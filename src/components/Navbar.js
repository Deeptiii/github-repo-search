import React, { useState } from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Navbar = () => {
    const [darkTheme, setdarkTheme] = useState(true);

    const handleToggleTheme = () => {
        document.body.classList.toggle("light");
        setdarkTheme(!darkTheme);
    };
    return (
        <Wrapper>
            <img className='logo' src={logo} alt='logo' />
            <button className='toggle' onClick={handleToggleTheme}>
                {darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
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
        transition: 0.5ms;
    }
    @media (min-width: 768px) {
        min-width: 1000px;
    }
`;

export default Navbar;
