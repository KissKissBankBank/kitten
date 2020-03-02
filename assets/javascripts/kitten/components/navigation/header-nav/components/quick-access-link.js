import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledQuickNav = styled.a`
  position: absolute;
  display: inline-flex;
  align-items: center;
  left: -100%;
  top: 0;
  bottom: 0;
  z-index: ${({ zIndex }) => zIndex};

  padding: ${pxToRem(25)} ${pxToRem(30)};
  background-color: ${COLORS.background1};
  border-right: ${pxToRem(1)} solid ${COLORS.line1};

  ${TYPOGRAPHY.fontStyles.regular}
  color: ${COLORS.font1};
  line-height: 1;
  font-size: ${pxToRem(16)};
  text-decoration: none;

  transition: left .2s ease, opacity 0;
  transition-delay: 0, 0;
  opacity: 0;

  &:focus, &:active {
    left: 0;
    opacity: 1;
    transition-delay: 0, .2s;
  }
`

export const QuickAccessLink = ({ text, href, zIndex }) => (
  <StyledQuickNav href={href} zIndex={zIndex}>
    {text}
  </StyledQuickNav>
)

QuickAccessLink.propTypes = {
  text: PropTypes.node,
  href: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

QuickAccessLink.defaultProps = {
  text: 'Aller au contenu',
  href: '#main',
  zIndex: 1,
}
