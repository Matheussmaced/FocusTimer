import { Sun } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: absolute;
  right: 1.562rem;

  button {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }
`
export const SunIcon = styled(Sun)`
  color: ${(props) => props.theme['icon-toggle']};
`
