import { combineReducers } from "redux";

import getJokesReducer from "./getJokesReducer";
import {ICategories} from '../actions/actions';

export interface IAppState { 
  getJokesReducer: IGetJokesReducer
}

interface IGetJokesReducer { 
  data: IData[]
  animal: IData[]
  career: IData[]
  celebrity: IData[]
}

interface IData { 
  categories: ICategories[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

const rootReducer = combineReducers({
  getJokesReducer: getJokesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;