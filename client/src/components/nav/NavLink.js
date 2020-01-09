import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const SNavLink = styled.div`
  padding: .5rem 1rem;
  
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: color .2s;
    
    :hover {
      color: #ff8111;
    }
  }
`;

const NavLink = (props) => {
    return (
        <SNavLink>
            <Link to={props.href} target={props.target}>
                {props.children}
            </Link>
        </SNavLink>
    );
};

export default NavLink;