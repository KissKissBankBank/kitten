import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'

export const Header = ({ children, headerRowProps, ...others }) => (
  <thead {...others}>
    <tr {...headerRowProps}>{children}</tr>
  </thead>
)

Header.defaultProps = {
  headerRowProps: {},
}

Header.propTypes = {
  headerRowProps: PropTypes.object,
}
