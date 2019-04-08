import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { CheckboxWithText } from './CheckboxWithText'
import { withState } from '@dump247/storybook-state'
import { styled, theme } from '@ui/theme'

const Link = styled.a`
  color: ${theme.pallete.radicalRed};
  text-decoration: none;
`

let checked = true
storiesOf('ui/molecules', module).add('CheckboxWithText', () => (
  <div>
    <CheckboxWithText
      disabled={boolean('disabled', false)}
      checked={boolean('checked', checked)}
      text={text(
        'Текст',
        <p>
          Со всеми <Link>условиями</Link> согласен <br /> вторая строка
        </p>,
      )}
      onClick={() => console.log('pressed', (checked = !checked))}
    />
  </div>
))
