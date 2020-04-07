import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'
import { horizontalStroke } from '../../../components/layout/horizontal-stroke'
import { strokeStyles } from './helpers/stroke-styles'

const StyledTitle = styled.span`
  ${TYPOGRAPHY.fontStyles.bold};
  ${({ modifier }) => modifierStyles(modifier)}

  ${({ margin }) =>
    !margin &&
    css`
      margin-top: 0;
      margin-bottom: 0;
    `}

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
`

const StyledStroke = styled.div`
  ${({ stroke }) => strokeStyles(stroke)}
`
export const Title = ({
  modifier,
  tag,
  margin,
  italic,
  stroke,
  ...other
}) => {


  return (
    <>
      <StyledTitle
        {...other}
        tag={tag}
        modifier={modifier}
        margin={margin}
        italic={italic}
      />
      <StyledStroke
        stroke={stroke}
      />
    </>
  )
}

Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  children: 'Lorem ipsum dolor sit amet…',
  stroke: 'default',
  margin: true,
  italic: false,
}

Title.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'senary',
  ]),
  stroke: PropTypes.oneOf([
    'big',
    'default',
    'tiny',
  ]),
  margin: PropTypes.bool,
  italic: PropTypes.bool,
}
