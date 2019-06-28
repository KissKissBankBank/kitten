import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Container } from '../../grid/container'
import { pxToRem } from '../../../helpers/utils/typography'

const SytledContainer = styled(Container)`
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
  ${({ position, marginTop, marginLeft }) => {
    if (position === 'top') {
      return css`
        left: 50%;
        margin-left: ${pxToRem(-marginLeft)};
        top: ${pxToRem(-marginTop)};
      `
    }
    if (position === 'bottom') {
      return css`
        left: 50%;
        margin-left: ${pxToRem(-marginLeft)};
        bottom: ${pxToRem(-marginTop)};
      `
    }
    if (position === 'left') {
      return css`
        top: 50%;
        margin-top: ${pxToRem(-marginTop)};
        left: ${pxToRem(-marginLeft)};
      `
    }
    if (position === 'right') {
      return css`
        top: 50%;
        margin-top: ${pxToRem(-marginTop)};
        right: ${pxToRem(-marginLeft)};
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
}) => {
  const height = iconHeight || iconWidth
  return (
    <SytledContainer
      className={className}
      color={color}
      position={position}
      halfWidth={iconWidth / 2}
      halfHeight={height / 2}
    >
      <IconWrapper
        marginTop={height / 2}
        marginLeft={iconWidth / 2}
        position={position}
      >
        {React.cloneElement(icon, {
          width: iconWidth,
          height,
        })}
      </IconWrapper>
      {children}
    </SytledContainer>
  )
}

IconContainer.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
}

IconContainer.defaultProps = {
  iconWidth: 25,
  iconHeight: undefined,
  position: 'top',
}
