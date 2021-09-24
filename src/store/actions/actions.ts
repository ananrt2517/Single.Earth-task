import {
  GET_JOKES_REQUEST,
  GET_JOKES_SUCCESS,
  EMPTY_STATE,
} from './actionsType';

export interface ICategories { 
  category: string
}

export interface IAction { 
  categories?: ICategories[]
  created_at?: string
  icon_url?: string
  id?: string
  updated_at?: string
  url?: string
  value?: string
}

export const getJokesRequest = (payload: string) => ({
  type: GET_JOKES_REQUEST,
  payload
});

export const getJokesSuccess = (
  payload: IAction[]
) => ({
  type: GET_JOKES_SUCCESS,
  payload,
});

export const emptyState = () => ({
  type: EMPTY_STATE,
});
