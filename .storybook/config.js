import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '@ui/theme'

const req = require.context('../src', true, /.story.js$/)

function loadStories() {
  addDecorator(withKnobs())
  addDecorator(story => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {story()}
      </>
    </ThemeProvider>
  ))
  req.keys().forEach(req)
}

configure(loadStories, module)
