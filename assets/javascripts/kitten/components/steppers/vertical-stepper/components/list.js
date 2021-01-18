import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'

const StyledList = styled.ul`
  margin: ${pxToRem(5)} 0 ${pxToRem(10)};
  padding: 0;

  ${TYPOGRAPHY.fontStyles.light};
  font-size: ${pxToRem(12)};
  line-height: normal;

  ${({ error }) =>
    error &&
    css`
      ${TYPOGRAPHY.fontStyles.regular};
      color: ${COLORS.error};
    `}
`

const StyledItem = styled.li`
  display: flex;
  align-items: baseline;

  margin: 0 0 ${pxToRem(2)};
  padding: 0;
  list-style: none;

  :before {
    padding-right: ${pxToRem(10)};
    content: '●';
    font-size: ${pxToRem(8)};
  }
`

export const List = ({ ...props }) => <StyledList {...props} />

List.Item = StyledItem

List.propTypes = {
  error: PropTypes.bool,
}

List.defaultProps = {
  error: false,
}
