import { JokesAction, JokesActionTypes, JokesListType } from 'store/types'

interface StateTyp {
  jokesList: JokesListType[]
  isLoading: boolean
  count?: number
}

const initialState: StateTyp = {
  jokesList: [],
  isLoading: false,
  count: undefined,
}

export const jokes = (state = initialState, action: JokesAction): StateTyp => {
  switch (action.type) {
    case JokesActionTypes.SET_JOKES_DATA:
      return {
        ...state,
        isLoading: false,
        jokesList: action.payload.result,
        count: action.payload.total,
      }
    case JokesActionTypes.LOADING_START:
      return { ...state, isLoading: true }
    case JokesActionTypes.FETCH_USER_ERROR:
      return { ...initialState }
    default:
      return state
  }
}
