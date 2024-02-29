import { SearchBox } from 'components/Fields'
import { StyledList, StyledMain, StyledSearchBox } from './styled'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useActions } from 'hooks/useActions'
import { Card } from 'components/Card'
import { useViewport } from 'hooks/useViewport'

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
  const { isDesktop } = useViewport()
  const { jokesList, isLoading, count } = useTypedSelector(
    (state) => state.jokes,
  )
  const { getJokes, loadingStart } = useActions()

  return (
    <StyledMain>
      <StyledSearchBox>
        <SearchBox
          placeholder={'Search jokes...'}
          count={count}
          onChange={(e) => {
            const value = e.target.value
            !isLoading && loadingStart()
            interval(() => getJokes(value))
          }}
        />
      </StyledSearchBox>
      <StyledList $isDesktop={isDesktop}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          jokesList.map((item, index) => (
            <Card key={item.id} isMain={index < 2 && isDesktop} data={item} />
          ))
        )}
      </StyledList>
    </StyledMain>
  )
}

export default Main
