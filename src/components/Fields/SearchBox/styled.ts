import styled from 'styled-components'

export const InputStyle = styled.input`
  width: 100%;
  height: 64px;
  box-shadow: 0px 7px 12px 0px ${(props) => props.theme.shadow};
  color: ${({ theme }) => theme.purple};
  font-family: 'Fira Sans';
  padding: 0 30px;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
  &:focus-visible,
  &:active {
    opacity: 1;
    outline: none;
    border: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: ${({ theme }) => theme.purple};
    opacity: 0.6;
    font-family: 'Fira Sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 23px;
    height: 54px;
  }
`
export const ContentBox = styled.label`
  width: 100%;
  max-width: 626px;
  > p {
    margin-left: 36px;
    margin-top: 20px;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    @media (max-width: 768px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }
  }
`
