import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const StyledTitle = styled.span`
  ${TYPOGRAPHY.fontStyles.bold};
  ${({ modifier }) => modifierStyles(modifier)};

  ${({ margin }) =>
    margin &&
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

export const Title = ({
  modifier,
  tag,
  margin,
  italic,
  ...other
)} => {

  const Tag = tag

  return (
    <Tag
      {...other}
      modifier={modifier}
      margin={margin}
      italic={italic}
    />
  )
}

Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  children: 'Lorem ipsum dolor sit amet…',
  margin: true,
  italic: false,
}

Title.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.string,
  margin: PropTypes.bool,
  italic: PropTypes.bool,
}
