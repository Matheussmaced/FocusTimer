import { createContext, useState } from 'react'

import { defaultTheme } from '../../styles/themes/default'
import { DefaultTheme } from 'styled-components/dist/types'

import { ChildrenProps, ThemeContextProps } from './interfaces'

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
)

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<DefaultTheme[string]>(defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
