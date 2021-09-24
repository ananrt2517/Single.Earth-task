import { ReactElement } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs'

interface Props {
  img?: string,
  createdAt?: string,
  id?: number,
  updatedAt?: string,
  url?: string,
  value?: string 
}

function Card({img, createdAt, id, updatedAt, url, value}: Props): ReactElement {
  return (
    <WrapDiv key={id}>
      <Icon src={img} />
      <StyledDiv>
        <StyledSpan><InnerSpan>Created at:</InnerSpan>{dayjs(createdAt).format('DD/MMM/YYYY')}</StyledSpan>
        <StyledSpan><InnerSpan>Updated at:</InnerSpan>{dayjs(updatedAt).format('DD/MMM/YYYY')}</StyledSpan>
        <StyledSpan><InnerSpan>Url:</InnerSpan><StyledA href={url}>{url}</StyledA></StyledSpan>
        <StyledSpan><InnerSpan>Joke:</InnerSpan>{value}</StyledSpan>
      </StyledDiv>
    </WrapDiv>
  )
}

export default Card

export const WrapDiv = styled.div`
  background-color: #262626;
  width: 450px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 11px 2px rgba(0,0,0,0.75);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledSpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
`;

const StyledA = styled.a`
  list-style: none;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const InnerSpan = styled.span`
  font-weight: 900;
  color: #5A1078;
  margin: 0 10px 10px 0;
`;

