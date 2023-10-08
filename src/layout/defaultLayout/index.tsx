import { useContext } from 'react'

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/pages/@Header'

import { defaultTheme } from '../../components/styles/themes/default'
import { lightTheme } from '../../components/styles/themes/light'
import { ThemeContext } from '../../components/context/Theme/Theme'

import { ThemeContextProps } from '../../components/context/Theme/interfaces'

export const DefaultLayout = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextProps

  function themeToggle() {
    if (theme === defaultTheme) {
      setTheme(lightTheme)
    } else {
      setTheme(defaultTheme)
    }
  }

  return (
    <>
      <Header themeToggle={themeToggle} theme={theme} />
      <Outlet />
    </>
  )
}
