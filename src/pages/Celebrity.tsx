import { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getJokesRequest, emptyState, IAction} from '../store/actions/actions';
import { IAppState } from '../store/reducer/rootReducer';
import { StyledDiv, StyledSpan } from './Animal';
import Card from '../components/Card';
import styled from 'styled-components';

function Celebrity(): ReactElement {
  
  const dispatch = useDispatch();
  const state = useSelector((state: IAppState) => state.getJokesReducer.data);
  const celebrityState = useSelector((state: IAppState) => state.getJokesReducer.celebrity);
  let newArray = celebrityState.slice(0, -5);

  useEffect(() => {
    dispatch(emptyState())
    dispatch(getJokesRequest('celebrity'))
    dispatch(getJokesRequest('celebrity'))
    dispatch(getJokesRequest('celebrity'))
    dispatch(getJokesRequest('celebrity'))
    dispatch(getJokesRequest('celebrity'))
  }, [dispatch]);

  return (
    <StyledDiv>
      <StyledSpan>This is a random Chuck Norris joke from CELEBRITY category! Enjoy it! </StyledSpan>
      <WrapCards>
        {state.map((item: IAction, index) => {
          return (
            <Card img={item?.icon_url} id={index} createdAt={item?.created_at}
            updatedAt={item?.updated_at} url={item?.url} value={item?.value} />
          )
        })}
        {newArray.map((item: IAction, index) => {
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

export default Celebrity

export const WrapCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 14%;
`;
