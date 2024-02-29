import styled from 'styled-components'

export const InputStyle = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.purple};
  font-family: 'Fira Sans';
  padding: 0 30px;
  height: 100%;
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
`
export const ContentBox = styled.label`
  width: 100%;
  max-width: 626px;
  height: 64px;
  box-shadow: 0px 7px 12px 0px ${(props) => props.theme.shadow};
`
