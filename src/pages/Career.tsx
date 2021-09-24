import { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getJokesRequest, emptyState, IAction } from '../store/actions/actions';
import { IAppState } from '../store/reducer/rootReducer';
import { StyledDiv, StyledSpan } from './Animal';
import Card from '../components/Card';
import { WrapCards } from './Celebrity';

function Career(): ReactElement {
  
  const dispatch = useDispatch();
  const state = useSelector((state: IAppState) => state.getJokesReducer.data);
  const careerState = useSelector((state: IAppState) => state.getJokesReducer.career);
  let newArray = careerState.slice(0, -5);

  useEffect(() => {
    dispatch(emptyState())
    dispatch(getJokesRequest('career'))
    dispatch(getJokesRequest('career'))
    dispatch(getJokesRequest('career'))
    dispatch(getJokesRequest('career'))
    dispatch(getJokesRequest('career'))
  }, [dispatch]);

  return (
    <StyledDiv>
      <StyledSpan>This is a random Chuck Norris joke from CAREER category! Enjoy it! </StyledSpan>
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
        }
        )}
      </WrapCards>
    </StyledDiv>
  )
}

export default Career
