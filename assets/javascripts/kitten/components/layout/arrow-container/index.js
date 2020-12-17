import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Container = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding: var(--k-ArrowContainer-padding);
  background-color: var(--k-ArrowContainer-color);
  border-radius: var(--k-ArrowContainer-borderRadius);
  border: var(--k-ArrowContainer-borderWidth) solid
    var(--k-ArrowContainer-borderColor);

  &.k-ArrowContainer--hasShadow {
    box-shadow: 0 ${pxToRem(10)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.2);
  }

  .k-ArrowContainer__arrow {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: var(--k-ArrowContainer-arrowSize) solid transparent;
  }

  &.k-ArrowContainer--hasBorder .k-ArrowContainer__arrow::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    z-index: -1;
  }

  &.k-ArrowContainer--top .k-ArrowContainer__arrow {
    top: calc(var(--k-ArrowContainer-arrowSize) * -2);
    left: var(--k-ArrowContainer-arrowDistance);
    border-bottom-color: var(--k-ArrowContainer-color);

    &::before {
      top: calc(
        (
            var(--k-ArrowContainer-borderSize) +
              var(--k-ArrowContainer-borderDistance)
          ) * -1
      );
      left: calc(var(--k-ArrowContainer-borderSize) * -1);
      border: var(--k-ArrowContainer-borderSize) solid transparent;
      border-bottom-color: var(--k-ArrowContainer-borderColor);
    }
  }

  &.k-ArrowContainer--bottom .k-ArrowContainer__arrow {
    bottom: calc(var(--k-ArrowContainer-arrowSize) * -2);
    left: var(--k-ArrowContainer-arrowDistance);
    border-top-color: var(--k-ArrowContainer-color);

    &::before {
      bottom: calc(
        (
            var(--k-ArrowContainer-borderSize) +
              var(--k-ArrowContainer-borderDistance)
          ) * -1
      );
      left: calc(var(--k-ArrowContainer-borderSize) * -1);
      border: var(--k-ArrowContainer-borderSize) solid transparent;
      border-top-color: var(--k-ArrowContainer-borderColor);
    }
  }

  &.k-ArrowContainer--right .k-ArrowContainer__arrow {
    right: calc(var(--k-ArrowContainer-arrowSize) * -2);
    top: var(--k-ArrowContainer-arrowDistance);
    border-left-color: var(--k-ArrowContainer-color);

    &::before {
      right: calc(
        (
            var(--k-ArrowContainer-borderSize) +
              var(--k-ArrowContainer-borderDistance)
          ) * -1
      );
      top: calc(var(--k-ArrowContainer-borderSize) * -1);
      border: var(--k-ArrowContainer-borderSize) solid transparent;
      border-left-color: var(--k-ArrowContainer-borderColor);
    }
  }

  &.k-ArrowContainer--left .k-ArrowContainer__arrow {
    left: calc(var(--k-ArrowContainer-arrowSize) * -2);
    top: var(--k-ArrowContainer-arrowDistance);
    border-right-color: var(--k-ArrowContainer-color);

    &::before {
      top: calc(var(--k-ArrowContainer-borderSize) * -1);
      left: calc(
        (
            var(--k-ArrowContainer-borderSize) +
              var(--k-ArrowContainer-borderDistance)
          ) * -1
      );
      border: var(--k-ArrowContainer-borderSize) solid transparent;
      border-right-color: var(--k-ArrowContainer-borderColor);
    }
  }
`

export const ArrowContainer = ({
  children,
  className,
  color,
  size,
  distance,
  distanceAsPercentage,
  position,
  centered,
  padding,
  shadow,
  borderRadius,
  borderColor,
  borderWidth,
  ...props
}) => {
  const arrowDistance = centered
    ? `calc(50% - ${pxToRem(size)})`
    : distanceAsPercentage
    ? `calc(${distance}% - ${pxToRem(size)})`
    : pxToRem(distance)

  const rawDistanceValue = Math.sqrt(Math.pow(borderWidth, 2) * 2)
  const borderDistance =
    borderWidth % 2 === 0
      ? Math.floor(rawDistanceValue)
      : Math.ceil(rawDistanceValue)

  const borderSize = borderDistance + size

  return (
    <Container
      className={classNames(
        'k-ArrowContainer',
        className,
        `k-ArrowContainer--${position}`,
        {
          'k-ArrowContainer--hasShadow': shadow,
          'k-ArrowContainer--hasBorder': borderWidth > 0,
        },
      )}
      style={{
        '--k-ArrowContainer-arrowDistance': arrowDistance,
        '--k-ArrowContainer-arrowSize': pxToRem(size),
        '--k-ArrowContainer-borderColor': borderColor,
        '--k-ArrowContainer-borderDistance': pxToRem(borderDistance),
        '--k-ArrowContainer-borderSize': pxToRem(borderSize),
        '--k-ArrowContainer-borderRadius': pxToRem(borderRadius),
        '--k-ArrowContainer-borderWidth': pxToRem(borderWidth),
        '--k-ArrowContainer-color': color,
        '--k-ArrowContainer-padding': pxToRem(padding),
      }}
      {...props}
    >
      {children}
      <span className="k-ArrowContainer__arrow" />
    </Container>
  )
}

ArrowContainer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  position: PropTypes.string,
  distance: PropTypes.number,
  distanceAsPercentage: PropTypes.bool,
  centered: PropTypes.bool,
  padding: PropTypes.number,
  shadow: PropTypes.bool,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
}

ArrowContainer.defaultProps = {
  color: COLORS.background3,
  size: 10,
  position: 'left',
  distance: 20,
  distanceAsPercentage: false,
  padding: 20,
  centered: false,
  shadow: false,
  borderRadius: 0,
  borderColor: COLORS.line1,
  borderWidth: 0,
}
