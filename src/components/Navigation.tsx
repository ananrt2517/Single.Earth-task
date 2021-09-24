import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navigation(): ReactElement {
  return (
    <WrapDiv>
      <StyledUl>
        <StyledLi>
          <StyledLink to='/animal'>Animals</StyledLink>
          <StyledLink to='/career'>Career</StyledLink>
          <StyledLink to='/celebrity'>Celebrity</StyledLink>
        </StyledLi>
      </StyledUl>
    </WrapDiv>
  )
}

export default Navigation

const WrapDiv = styled.div`
  position: fixed;
  top: -16px;
  width: 100%;
  background-color: #262626;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.75);
  z-index: 1;
`;

const StyledUl = styled.ul`
  padding: 20px;
`;

const StyledLi = styled.li`
  display: flex;
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: #5A1078;
  text-decoration: none;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: 900;
  &:hover {
    color: #8D58AD;
  }
  &:active {
    color: #8D58AD;
  }
  &:focus {
    color: none;
  }
`
