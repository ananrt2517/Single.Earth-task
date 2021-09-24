import { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getJokesRequest, IAction, emptyState } from '../store/actions/actions';
import styled from 'styled-components';
import Card from '../components/Card';
import { WrapCards } from './Celebrity';
import { IAppState } from '../store/reducer/rootReducer';

function Animal(): ReactElement {
  
  const dispatch = useDispatch();
  const state = useSelector((state: IAppState) => state.getJokesReducer.data);
  const animalState = useSelector((state: IAppState) => state.getJokesReducer.animal);
  let newArray = animalState.slice(0, -5);
  
  useEffect(() => {
    dispatch(emptyState())
    dispatch(getJokesRequest('animal'))
    dispatch(getJokesRequest('animal'))
    dispatch(getJokesRequest('animal'))
    dispatch(getJokesRequest('animal'))
    dispatch(getJokesRequest('animal'))
  }, [dispatch]);

  return (
    <StyledDiv>
      <StyledSpan>This is a random Chuck Norris joke from ANIMAL category! Enjoy it! </StyledSpan>
      <WrapCards>
        {state.map((item: IAction, index) => { 
          return (
            <>
              <Card img={item?.icon_url} id={index} createdAt={item?.created_at}
              updatedAt={item?.updated_at} url={item?.url} value={item?.value} />
            </>
          )
        })}
        {newArray?.map((item: IAction, index) => {
              return (
                <Card img={item?.icon_url} id={index} createdAt={item?.created_at}
                  updatedAt={item?.updated_at} url={item?.url} value={item?.value} />
              )
            })
      }
      </WrapCards>
    </StyledDiv>
  )
}

export default Animal

export const StyledDiv = styled.div`
  background-color: #3F3C41;
  margin-top: -41px;
  padding-top: 50px;
  padding-left: 10px;
  margin-top: 64px;
`;

export const StyledSpan = styled.span`
  width: 300px;
  color: #31AA8E;
  font-size: 20px;
  font-weight: 900;
`;
