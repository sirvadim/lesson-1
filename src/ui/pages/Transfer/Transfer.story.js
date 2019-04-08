import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import {
  Header,
  TextFieldStoryPhoneNumber,
  ButtonAccent,
  CheckboxWithText,
} from '@ui/molecules'
import { action } from '@storybook/addon-actions'
import { FormLabel, FormAdornment, TextArea, SelectField } from '@ui/molecules'
import { text, boolean } from '@storybook/addon-knobs'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`
const Link = styled.a`
  color: ${theme.pallete.radicalRed};
  text-decoration: none;
`
let checked = true
storiesOf('ui/pages', module).add('Transfer form', () => {
  return (
    <PageTemplate>
      <Flex1>
        <Wrapper>
          <HBox height={9} />
          <SelectField
            label={text('label', 'Страна 1')}
            disabled={boolean('disabled', false)}
          />
          <SelectField
            label={text('label', 'Страна 2')}
            disabled={boolean('disabled', false)}
          />
          <TextArea
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', undefined, null)}
            label={text('label', 'Комментарий', null)}
            // value={store.state.value}
            onChange={value => {
              // store.set({ value })
            }}
          />
          <HBox height={25} />
          <CheckboxWithText
            disabled={boolean('disabled', false)}
            checked={boolean('checked', checked)}
            text={
              <p>
                Со всеми <Link>условиями</Link> согласен <br /> вторая строка
              </p>
            }
            onClick={() => console.log('pressed', (checked = !checked))}
          />
        </Wrapper>
        <HBox height={25} />
        <ButtonAccent disabled={true} onPress={action('press')}>
          Отправить
        </ButtonAccent>
      </Flex1>
    </PageTemplate>
  )
})
