import React, { Component } from 'react'
import { ThemeProvider } from '@ui/theme'
import { theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { GlobalStyles } from '@ui/theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div className="App">
            <Body2>lesson1 </Body2>
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default App
