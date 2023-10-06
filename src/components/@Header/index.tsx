import { Moon } from 'phosphor-react'
import { defaultTheme } from '../styles/themes/default'
import { HeaderContainer, SunIcon } from './styles'

import { DefaultTheme } from 'styled-components/dist/types'
import { useState } from 'react'

interface HeaderProps {
  themeToggle: () => void
  theme: DefaultTheme[string]
}

export const Header = ({ themeToggle, theme }: HeaderProps) => {
  return (
    <HeaderContainer>
      <button onClick={themeToggle}>
        {theme === defaultTheme ? (
          <SunIcon size={32} weight="bold" />
        ) : (
          <Moon size={32} weight="bold" />
        )}
      </button>
    </HeaderContainer>
  )
}
