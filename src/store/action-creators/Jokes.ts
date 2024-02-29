import { getJokesQuery } from 'api/JokesQuery'
import { Dispatch } from 'redux'

import { JokesAction, JokesActionTypes } from 'store/types'

export const getJokes = (value: string) => {
  return async (dispatch: Dispatch<JokesAction>) => {
    try {
      if (value.length < 3) {
        throw new Error('')
      }
      const data = await getJokesQuery(value)
      dispatch({
        type: JokesActionTypes.SET_JOKES_DATA,
        payload: data,
      })
    } catch (e) {
      dispatch({
        type: JokesActionTypes.FETCH_USER_ERROR,
        payload: 'Error',
      })
    }
  }
}
export const loadingStart = () => (dispatch: Dispatch<JokesAction>) => {
  dispatch({
    type: JokesActionTypes.LOADING_START,
  })
}
