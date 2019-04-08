import React from 'react'
import PropTypes from 'prop-types'

import { VBox, IconSuccess } from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const Box = styled.div`
  border: ${props => (props.checked ? 'none' : '1px solid #d3d3d3')};
  height: 25px;
  width: 25px;
  background-color: ${props => props.color};
  border-radius: 2px;
`
export const CheckboxWithText = ({ disabled, checked, text, onClick }) => {
  console.log('checkbox', checked)
  let color
  if (!checked) color = theme.pallete.white
  else if (disabled) color = theme.pallete.disabled
  else color = theme.pallete.radicalRed
  return (
    <Container onClick={onClick}>
      <Box color={color} checked={checked}>
        {checked ? <IconSuccess color={theme.pallete.white} /> : null}
      </Box>
      <VBox />
      <Body2>{text ? text : ''}</Body2>
    </Container>
  )
}

CheckboxWithText.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  text: PropTypes.node,
  onClick: PropTypes.func,
}
