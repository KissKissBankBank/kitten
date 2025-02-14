import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Container } from '../../../layout/container'
import { pxToRem } from '../../../../helpers/utils/typography'
import { VisuallyHidden } from '../../../accessibility/visually-hidden'

const StyledContainer = styled(Container)`
  position: relative;
  padding: ${pxToRem(20)};
  background-color: ${({ color }) => color};
  margin-left: ${({ position, halfWidth }) =>
    position === 'left' ? pxToRem(halfWidth) : 'auto'};
  margin-right: ${({ position, halfWidth }) =>
    position === 'right' ? pxToRem(halfWidth) : 'auto'};
  margin-top: ${({ position, halfHeight }) =>
    position === 'top' ? pxToRem(halfHeight) : 'auto'};
  margin-bottom: ${({ position, halfHeight }) =>
    position === 'bottom' ? pxToRem(halfHeight) : 'auto'};
`

const IconWrapper = styled.div`
  position: absolute;
  ${({ position, marginHeight, marginWidth }) => {
    if (position === 'top') {
      return css`
        left: 50%;
        margin-left: ${pxToRem(-marginWidth)};
        top: ${pxToRem(-marginHeight)};
      `
    }
    if (position === 'bottom') {
      return css`
        left: 50%;
        margin-left: ${pxToRem(-marginWidth)};
        bottom: ${pxToRem(-marginHeight)};
      `
    }
    if (position === 'left') {
      return css`
        top: 50%;
        margin-top: ${pxToRem(-marginHeight)};
        left: ${pxToRem(-marginWidth)};
      `
    }
    if (position === 'right') {
      return css`
        top: 50%;
        margin-top: ${pxToRem(-marginHeight)};
        right: ${pxToRem(-marginWidth)};
      `
    }
  }}
`

export const IconContainer = ({
  icon,
  children,
  color,
  iconWidth,
  iconHeight,
  position,
  className,
  iconDescription,
}) => {
  const height = iconHeight || iconWidth
  return (
    <StyledContainer
      className={className}
      color={color}
      position={position}
      halfWidth={iconWidth / 2}
      halfHeight={height / 2}
    >
      {iconDescription && <VisuallyHidden>{iconDescription}</VisuallyHidden>}
      {children}
      <IconWrapper
        marginHeight={height / 2}
        marginWidth={iconWidth / 2}
        position={position}
      >
        {React.cloneElement(icon, {
          width: iconWidth,
          height,
          ['aria-hidden']: true,
        })}
      </IconWrapper>
    </StyledContainer>
  )
}

IconContainer.propTypes = {
  icon: PropTypes.node.isRequired,
  iconDescription: PropTypes.string,
  color: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
}

IconContainer.defaultProps = {
  iconWidth: 25,
  color: '#fff',
  iconDescription: undefined,
  iconHeight: undefined,
  position: 'top',
}
