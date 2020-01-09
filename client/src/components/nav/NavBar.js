import React from 'react';
import styled from "styled-components";
import NavLink from "./NavLink";

const SNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: #282c34;
`;

const NavBar = () => {
    return (
        <SNavBar>
            <NavLink href="/">
                Home
            </NavLink>
            <NavLink href="/articles">
                Articles
            </NavLink>
        </SNavBar>
    );
};

export default NavBar;