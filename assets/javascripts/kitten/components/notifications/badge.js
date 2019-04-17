import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import classNames from 'classnames'

const StyledBadge = styled.span`
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
  ${({ withIcon }) =>
    withIcon &&
    css`
      position: absolute;
      margin-left: -8px;
      margin-top: -4px;
    `}
`

export const Badge = ({ className, spaced, Icon, ...others }) => {
  return (
    <div>
      {Icon && <Icon />}
      <StyledBadge
        role="alert"
        className={classNames('k-Badge', className, {
          'k-Badge--spaced': spaced,
        })}
        withIcon={Icon !== null}
        {...others}
      />
    </div>
  )
}

Badge.propTypes = {
  className: PropTypes.string,
  spaced: PropTypes.bool,
  color: PropTypes.string,
  Icon: PropTypes.func,
}

Badge.defaultProps = {
  className: null,
  spaced: false,
  Icon: null,
  color: null,
}
