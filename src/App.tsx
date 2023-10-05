import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './components/styles/themes/default'
import { GlobalStyle } from './components/styles/global'

import { BodyTimer } from './components/BodyTimer'
import { Header } from './components/@Header'
import { useState } from 'react'
import { lightTheme } from './components/styles/themes/light'

import { DefaultTheme } from 'styled-components/dist/types'

function App() {
  const [theme, setTheme] = useState<DefaultTheme[string]>(defaultTheme)

  function themeToggle() {
    if (theme === defaultTheme) {
      setTheme(lightTheme)
    } else {
      setTheme(defaultTheme)
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header themeToggle={themeToggle} theme={theme} />
        <BodyTimer />

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
