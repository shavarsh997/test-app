import { combineReducers } from 'redux'
import { jokes } from './Jokes'

export const rootReducer = combineReducers({ jokes })

export type RootState = ReturnType<typeof rootReducer>
