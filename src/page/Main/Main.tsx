import { SearchBox } from 'components/Fields'
import { StyledList, StyledMain, StyledSearchBox } from './styled'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useActions } from 'hooks/useActions'

const intervalQuery = (value: number) => {
  let timer: NodeJS.Timeout
  return (func: () => void) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, value)
  }
}

const interval = intervalQuery(500)

const Main = () => {
  const { jokesList, isLoading } = useTypedSelector((state) => state.jokes)
  const { getJokes, loadingStart } = useActions()
  console.log(jokesList)

  return (
    <StyledMain>
      <StyledSearchBox>
        <SearchBox
          placeholder={'Search jokes...'}
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              loadingStart()
              interval(() => getJokes(e.target.value))
            }
          }}
        />
      </StyledSearchBox>
      <StyledList>{isLoading && <p>Loading...</p>}</StyledList>
    </StyledMain>
  )
}

export default Main
