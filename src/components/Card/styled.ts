import styled from 'styled-components'

export const StyledCard = styled.div<{ $isMain?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  box-shadow: 0px 7px 25px 0px ${({ theme }) => theme.shadow};
  padding: 30px 30px 25px;
  ${({ $isMain }) =>
    $isMain ? `min-height: 262px; padding: 40px 40px 25px;` : ''}
  .text {
    font-family: 'Fira Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    ${({ $isMain }) => ($isMain ? `  font-size: 20px; line-height: 30px;` : '')}
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`
export const StyledDate = styled.div`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: max-content;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
    }
  }
`
