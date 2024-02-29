import { JokesType } from 'store/types'
import Axios from './Axios'

export const getJokesQuery = (queryText: string) =>
  Axios.get<JokesType>(`/jokes/search?query=${queryText}`).then(
    ({ data }) => data,
  )
