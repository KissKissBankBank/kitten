import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import isEmpty from 'lodash/fp/isEmpty'
import domElementHelper from '../../../helpers/dom/element-helper'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledLabel = styled.label`
  display: block;
  ${TYPOGRAPHY.fontStyles.regular}
  cursor: pointer;
  font-size: ${stepToRem(-1)};
  display: flex;
  align-items: center;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(0)};
  }

  &.k-Label--tiny {
    line-height: 1.3;
    font-size: ${stepToRem(0)};
  }

  &.k-Label--micro {
    line-height: 1.3;
    font-size: ${stepToRem(-1)};
  }

  &.k-Label--withoutPointerEvents {
    pointer-events: none;
  }

  .k-Label--dot {
    margin: 0 0 0 ${pxToRem(10)};
    width: var(--dot-width);
    height: var(--dot-width);
    background-color: var(--dot-background-color);
    display: inline-block;
    border-radius: 50%;
  }
`

export const Label = ({
  tag,
  className,
  children,
  focusId,
  size,
  withoutPointerEvents,
  htmlFor,
  dot,
  style,
  ...other
}) => {
  const handleClick = e => {
    if (domElementHelper.canUseDom() && focusId) {
      e.preventDefault()

      document.getElementById(focusId).focus()
    }
  }

  return (
    <StyledLabel
      className={classNames('k-Label', className, `k-Label--${size}`, {
        'k-Label--withoutPointerEvents': withoutPointerEvents,
      })}
      htmlFor={focusId || htmlFor}
      onClick={handleClick}
      as={tag}
      {...other}
    >
      {children}
      {!isEmpty(dot) && (
        <span 
          className={classNames('k-Label--dot')}
          title={dot.title}
          tabIndex="-1"
          style={{
            '--dot-background-color': dot?.backgroundColor ?? null,
            '--dot-width': 'width' in dot ? pxToRem(dot.width) : null,
            ...style
          }}
        />
      )}
    </StyledLabel>
  )
}

Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'normal',
  withoutPointerEvents: false,
  dot: {},
}

Label.propTypes = {
  focusId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf([null, undefined, 'normal', 'tiny', 'micro']),
  withoutPointerEvents: PropTypes.bool,
  dot: PropTypes.shape({
    width: PropTypes.number,
    backgroundColor: PropTypes.node,
    title: PropTypes.string,
  }),
}
