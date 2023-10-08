import { DefaultTheme } from 'styled-components/dist/types'

export interface ChildrenProps {
  children: React.ReactNode
}

export interface ThemeContextProps {
  theme: DefaultTheme
  setTheme: (theme: DefaultTheme) => void
}
