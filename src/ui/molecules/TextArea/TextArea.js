import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox } from '@ui/atoms'
import { FormLabel } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FieldContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 130px;
  width: 100%;
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const StyledInput = styled.textarea`
  resize: none;
  border: none;
  overflow: scroll;
  background-color: transparent;
  min-height: 101px;
  width: 100%;
  max-width: 100%;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  padding: ${theme.paddings.main}px;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
  }
`

export const TextArea = ({
  disabled,
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = e => {
    if (onFocus) {
      onFocus(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) {
      onBlur(e)
    }
    setFocused(false)
  }
  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <FieldContainer focused={focused}>
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </FieldContainer>
    </Container>
  )
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

TextArea.defaultProps = {
  placeholder: 'Например, прошу представляться при звонке',
}
