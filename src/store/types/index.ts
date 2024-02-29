export type JokesListType = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export type JokesType = {
  total: number
  result: JokesListType[]
}

export enum JokesActionTypes {
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  SET_JOKES_DATA = 'SET_JOKES_DATA',
  LOADING_START = 'LOADING_START',
}

interface LoadingStart {
  type: JokesActionTypes.LOADING_START
}

interface SetJokesData {
  type: JokesActionTypes.SET_JOKES_DATA
  payload: JokesType
}

interface FetchUserErrorAction {
  type: JokesActionTypes.FETCH_USER_ERROR
  payload: string
}

export type JokesAction = FetchUserErrorAction | LoadingStart | SetJokesData
