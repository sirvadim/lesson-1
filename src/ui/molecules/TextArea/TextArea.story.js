import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { TextArea } from './TextArea'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add(
  'TextArea',
  withState({ value: '' })(({ store }) => (
    <TextArea
      disabled={boolean('disabled', false)}
      placeholder={text('placeholder', undefined, null)}
      label={text('label', 'Комментарий', null)}
      value={store.state.value}
      onChange={value => {
        store.set({ value })
      }}
    />
  )),
)
