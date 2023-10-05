import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './components/styles/themes/default'
import { GlobalStyle } from './components/styles/global'

import { BodyTimer } from './components/BodyTimer'
import { Header } from './components/@Header'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <BodyTimer />

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
