import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { Status } from './status'
import classNames from 'classnames'
import { STEP_CLASSNAME, LINK_CLASSNAME } from '../index'

export const Step = ({
  success,
  valid,
  error,
  waiting,
  disabled,
  statusProps,
  children,
  className,
  variant,
  bridge,
  ...other
}) => {
  return (
    <StyledItem
      className={classNames('k-Steppers--VerticalStepper__item', {
        'k-Steppers--VerticalStepper__item--hasActiveLine': success,
        'k-Steppers--VerticalStepper__item--bridge': bridge,
      })}
    >
      <StyledLink
        as={other.href && !disabled ? 'a' : 'span'}
        {...other}
        variant={variant}
      >
        <Status
          success={success}
          valid={valid}
          error={error}
          waiting={waiting}
          disabled={disabled}
          bridge={bridge}
          variant={variant}
          {...statusProps}
        />

        <div
          className={classNames(
            STEP_CLASSNAME,
            'k-Steppers--VerticalStepper__step--link--content',
            {
              'k-Steppers--VerticalStepper__step--link--content--disabled': disabled,
            },
            className,
          )}
        >
          {children}
        </div>
      </StyledLink>
    </StyledItem>
  )
}

const StyledItem = styled.li`
  padding: ${pxToRem(15)} 0;

  &:first-of-type {
    margin-top: 0;
    padding-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  li:not(:last-of-type) {
    margin: 0 !important;
    &::after {
      display: none;
    }
  }

  &.k-Steppers--VerticalStepper__item--bridge {
    padding: ${pxToRem(8)} 0;
  }
`

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  ${({ as, onClick }) =>
    (as === 'a' || onClick) &&
    css`
      cursor: pointer;
      text-decoration: none;

      .${STEP_CLASSNAME} {
        transition: transform 0.4s;
      }

      .${LINK_CLASSNAME} {
        transition: color 0.4s;
      }

      :hover,
      :focus,
      :active {
        .${STEP_CLASSNAME} {
          transform: translateX(${pxToRem(5)});
        }

        .${LINK_CLASSNAME} {
          color: ${COLORS.primary3};
        }
      }
    `}

  .k-Steppers--VerticalStepper__step--link--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    color: ${COLORS.font1};

    &.k-Steppers--VerticalStepper__step--link--content--disabled {
      color: ${COLORS.font2};
    }
  }
`

Step.propTypes = {
  href: PropTypes.string,
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool,
  bridge: PropTypes.bool,
}

Step.defaultProps = {
  href: null,
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false,
}
