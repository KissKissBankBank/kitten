import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

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

  &.k-ButtonImageNext--tiny {
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
  }

  &.k-ButtonImageNext--big {
    @media (min-width: ${ScreenConfig.S.min}px) {
      width: ${pxToRem(50)};
      height: ${pxToRem(50)};
    }
  }

  &.k-ButtonImageNext--huge {
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
  }

  &.k-ButtonImageNext--withoutPointerEvents {
    pointer-events: none;
  }

  &.k-ButtonImageNext--withBorder {
    border: ${pxToRem(2)} solid ${COLORS.line1};
  }

  .k-ButtonImageNext__img {
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
  tiny,
  big,
  huge,
  withoutPointerEvents,
  withBorder,
  img,
  ...others
}) => {
  return (
    <StyledButtonImage
      as={tag}
      className={classNames(
        'k-ButtonImageNext',
        {
          'k-ButtonImageNext--tiny': tiny,
          'k-ButtonImageNext--big': big,
          'k-ButtonImageNext--huge': huge,
          'k-ButtonImageNext--withoutPointerEvents': withoutPointerEvents,
          'k-ButtonImageNext--withBorder': withBorder,
        },
        className,
      )}
      {...others}
    >
      {!!img && (
        <img
          {...img}
          className={classNames('k-ButtonImageNext__img', img.className)}
          alt={img.alt || ''}
        />
      )}
    </StyledButtonImage>
  )
}

ButtonImage.defaultProps = {
  tag: 'button',
  className: null,
  tiny: false,
  big: false,
  huge: false,
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null,
  },
}
