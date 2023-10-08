import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './components/styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/@Router/Router'

import { ThemeContext } from './components/context/Theme/Theme'

import { ThemeContextProps } from './components/context/Theme/interfaces'

function App() {
  const { theme } = useContext(ThemeContext) as ThemeContextProps

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />

          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
