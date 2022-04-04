import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import isEmpty from 'lodash/fp/isEmpty'
import domElementHelper from '../../../helpers/dom/element-helper'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated'

const StyledLabel = styled.label`
  display: block;
  ${TYPOGRAPHY.fontStyles.regular}
  cursor: pointer;
  line-height: 1.3;

  &.k-Label--micro {
    font-size: ${stepToRem(-2)};
  }

  &.k-Label--small {
    font-size: ${stepToRem(-1)};
  }

  &.k-Label--medium {
    font-size: ${stepToRem(0)};
  }

  &.k-Label--withoutPointerEvents {
    pointer-events: none;
  }

  .k-Label--dot {
    margin: 0 0 0 ${pxToRem(10)};
    width: var(--dot-width);
    height: var(--dot-width);
    background-color: var(--dot-background-color);
    vertical-align: middle;
    display: inline-block;
    border-radius: var(--border-radius-rounded);
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
  checkDeprecatedSizes(size)

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
            ...style,
          }}
        />
      )}
    </StyledLabel>
  )
}

Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'small',
  withoutPointerEvents: false,
  dot: {},
}

Label.propTypes = {
  focusId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf(['micro', 'small', 'medium']),
  withoutPointerEvents: PropTypes.bool,
  dot: PropTypes.shape({
    width: PropTypes.number,
    backgroundColor: PropTypes.node,
    title: PropTypes.string,
  }),
}
