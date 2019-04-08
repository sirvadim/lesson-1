import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextField } from './TextField'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

export const TextFieldStoryPhoneNumber = withState({ value: '' })(
  ({ store }) => (
    <TextField
      startAdornment={select(
        'startAdornment',
        {
          phone: '+7',
          none: null,
        },
        '+7',
      )}
      status={select(
        'status',
        {
          loading: 'loading',
          success: 'success',
          none: null,
        },
        null,
      )}
      disabled={boolean('disabled', false)}
      placeholder={text('placeholder', '9XXXXXXXXX')}
      label={text('label', 'Номер телефона')}
      error={select(
        'error',
        {
          invalid: 'Поле заполнено неверно',
          none: null,
        },
        null,
      )}
      tip={select(
        'tip',
        {
          tip: 'Номер без в формате 9XXXXXXXXX',
          none: null,
        },
        null,
      )}
      valid={boolean('valid', false)}
      value={store.state.value}
      unknownError="Произошла неизвестная ошибка"
      loadingMessage="Телефон отправляется"
      success="Номер успешно отправлен"
      onChange={value => store.set({ value })}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
    />
  ),
)

export const TextFieldStoryPhoneCode = withState({ value: '' })(({ store }) => (
  <TextField
    startAdornment={select(
      'startAdornment',
      {
        none: null,
      },
      null,
    )}
    status={select(
      'status',
      {
        loading: 'loading',
        success: 'success',
        error: 'error',
        none: null,
      },
      null,
    )}
    disabled={boolean('disabled', false)}
    placeholder={text('placeholder', '1255')}
    label={text('label', 'Код')}
    error={select(
      'error',
      {
        invalid: 'Поле заполнено неверно',
        none: null,
      },
      null,
    )}
    tip={select(
      'tip',
      {
        tip: 'Номер без в формате 9XXXXXXXXX',
        none: null,
      },
      null,
    )}
    valid={boolean('valid', false)}
    value={store.state.value}
    unknownError="Произошла неизвестная ошибка"
    loadingMessage="Код отправляется"
    success="Код успешно отправлен"
    onChange={value => store.set({ value })}
    onBlur={action('onBlur')}
    onFocus={action('onFocus')}
  />
))

storiesOf('ui/molecules', module).add('Phone number', () => {
  return <TextFieldStoryPhoneNumber />
})

storiesOf('ui/molecules', module).add('Phone code', () => {
  return <TextFieldStoryPhoneCode />
})
