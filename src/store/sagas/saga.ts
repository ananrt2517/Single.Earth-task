import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";

import { getJokesSuccess } from '../actions/actions';
import { GET_JOKES_REQUEST } from "../actions/actionsType";

interface IAction { 
  payload: string
  type: string
}

const getJokes = (payload: string) =>
  axios.get<IAction>(`https://api.chucknorris.io/jokes/random?category=${payload}`);

function* fetchTodoSaga(action:IAction): any {
  try {
    const response = yield call(getJokes, action.payload);
    yield put(
      getJokesSuccess(response.data)
    );
  } catch (e) {
    console.log(e)
  }
}

function* todoSaga() {
  
  yield all([takeEvery(GET_JOKES_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;