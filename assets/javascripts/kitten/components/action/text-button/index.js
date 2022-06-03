import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { mq } from '../../../constants/screen-config'
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated'

const StyledButton = styled.button`
  ${TYPOGRAPHY.fontStyles['500']}
  display: inline-flex;
  align-items: center;
  gap: ${pxToRem(10)};
  color: var(--color-grey-900);
  text-align: left;

  transition: color var(--transition);

  &:hover {
    color: var(--color-primary-500);
  }

  &:active {
    color: var(--color-primary-700);
  }

  &:focus-visible {
    outline-style: auto;
  }

  svg {
    height: 1.25em;
  }
  svg,
  svg path[fill]:not([fill='transparent']) {
    fill: currentColor;
  }

  &.k-TextButton--normal,
  &.k-TextButton--medium {
    font-size: ${pxToRem(14)};

    @media ${mq.tabletAndDesktop} {
      font-size: ${pxToRem(16)};
    }
  }

  &.k-TextButton--big,
  &.k-TextButton--large {
    font-size: ${pxToRem(16)};

    @media ${mq.tabletAndDesktop} {
      font-size: ${pxToRem(20)};
    }
  }
`

export const TextButton = ({ className, size, ...props }) => {
  checkDeprecatedSizes(size)

  return (
    <StyledButton
      type="button"
      className={classNames(
        'k-TextButton',
        'k-u-reset-button',
        className,
        `k-TextButton--${size}`,
      )}
      {...props}
    />
  )
}

TextButton.defaultProps = {
  size: 'medium',
}

TextButton.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']),
}
