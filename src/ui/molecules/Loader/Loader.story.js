import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, color } from '@storybook/addon-knobs'
import { Loader } from './Loader'

storiesOf('ui/molecules', module).add('Loader', () => (
  <Loader
    loading={boolean('Loading', true, null)}
    color={color('Color', '#FF3F6E', null)}
  />
))
