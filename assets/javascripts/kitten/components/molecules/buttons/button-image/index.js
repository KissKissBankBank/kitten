import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledButtonImage = styled.button`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: 50%;

  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  border: 0;
  padding: 0;
  opacity: 1;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &.k-ButtonImage--tiny {
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
  }

  &.k-ButtonImage--big {
    @media (min-width: ${ScreenConfig.S.min}px) {
      width: ${pxToRem(50)};
      height: ${pxToRem(50)};
    }
  }

  &.k-ButtonImage--huge {
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
  }

  &.k-ButtonImage--withoutPointerEvents {
    pointer-events: none;
  }

  &.k-ButtonImage--withBorder {
    border: var(--border-width) solid var(--color-grey-400);
  }

  .k-ButtonImage__img {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ButtonImage = ({
  tag,
  className,
  size,
  withoutPointerEvents,
  withBorder,
  img,
  ...others
}) => {
  return (
    <StyledButtonImage
      as={tag}
      className={classNames(
        'k-ButtonImage',
        `k-ButtonImage--${size}`,
        {
          'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
          'k-ButtonImage--withBorder': withBorder,
        },
        className,
      )}
      {...others}
    >
      {!!img && (
        <img
          {...img}
          className={classNames('k-ButtonImage__img', img.className)}
          alt={img.alt || ''}
        />
      )}
    </StyledButtonImage>
  )
}

ButtonImage.defaultProps = {
  tag: 'button',
  size: 'regular',
  withoutPointerEvents: false,
  withBorder: false,
  img: {},
}

ButtonImage.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge']),
  withoutPointerEvents: PropTypes.bool,
  withBorder: PropTypes.bool,
  img: PropTypes.object,
}
