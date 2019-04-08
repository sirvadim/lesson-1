import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox } from '@ui/atoms'
import { FormLabel } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
`

const SelectFieldContainer = styled.select`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.paddings.main};
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

export const SelectField = ({ label, disabled }) => {
  // todo props option
  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <HBox />
      <SelectFieldContainer>
        <option value="" selected disabled hidden />
        <option>Россия</option>
        <option>Англия</option>
      </SelectFieldContainer>
    </Container>
  )
}

SelectField.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
}
