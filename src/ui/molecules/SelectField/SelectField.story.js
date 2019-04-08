import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { SelectField } from './SelectField'

storiesOf('ui/molecules', module).add('SelectField', () => (
  <div>
    <SelectField
      label={text('label', 'Страна 1')}
      disabled={boolean('disabled', false)}
    />
    <SelectField
      label={text('label', 'Страна 2')}
      disabled={boolean('disabled', false)}
    />
  </div>
))
