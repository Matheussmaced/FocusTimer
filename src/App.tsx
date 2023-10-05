import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './components/styles/themes/default'
import { GlobalStyle } from './components/styles/global'

import { BodyTimer } from './components/styles/BodyTimer'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BodyTimer />

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
