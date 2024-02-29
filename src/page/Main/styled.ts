import styled from 'styled-components'

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 40px;
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`
export const StyledSearchBox = styled.div`
  margin-top: 128px;
  width: 100%;
  justify-content: center;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 64px;
  }
`
export const StyledList = styled.div<{ $isDesktop: boolean }>`
  margin-top: 60px;
  max-width: 1596px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  > div {
    ${({ $isDesktop }) =>
      $isDesktop ? `max-width: calc((100% - 40px) / 3);` : ''}
  }
  > div:nth-child(1),
  > div:nth-child(2) {
    ${({ $isDesktop }) =>
      $isDesktop ? `max-width: calc((100% - 20px) / 2);` : ''}
  }
`
