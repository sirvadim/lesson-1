import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../src', true, /.story.js$/)

function loadStories() {
  addDecorator(withKnobs())
  req.keys().forEach(req)
}

configure(loadStories, module)
