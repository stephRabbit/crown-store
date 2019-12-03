import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0.75rem;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`

export const OptionButton = styled.button`
  ${OptionContainerStyles}
  border: 0;
  background: transparent;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1rem;
`
