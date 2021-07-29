import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import classNames from 'classnames'
import isEmpty from 'lodash/fp/isEmpty'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledTextInputWithIcon = styled.div`
  position: relative;

  .k-Form-TextInputWithIcon__icon {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 0;
    width: ${pxToRem(50)};
    height: 100%;

    &.k-Form-TextInputWithIcon__icon--disabled > svg:not(.k-ColorSvg) {
      &[stroke]:not([stroke='none']),
      & [stroke]:not([stroke='none']) {
        stroke: ${COLORS.font2};
      }
      &[fill]:not([fill='none']),
      & [fill]:not([fill='none']) {
        fill: ${COLORS.font2};
      }
    }
  }
  &.k-Form-TextInputWithIcon--icon_left {
    .k-Form-TextInputWithIcon__input {
      padding-left: ${pxToRem(50)};
    }

    .k-Form-TextInputWithIcon__icon {
      left: 0;
    }
  }
  &.k-Form-TextInputWithIcon--icon_right {
    .k-Form-TextInputWithIcon__input {
      padding-right: ${pxToRem(50)};
    }

    .k-Form-TextInputWithIcon__icon {
      right: 0;
    }
  }

  .k-Form-TextInputWithIcon__button {
    border-radius: var(--input-button-border-radius);
  }

  &.k-Form-TextInput--orion {
    --input-button-border-radius: ${pxToRem(4)};

    &.k-Form-TextInput--big,
    &.k-Form-TextInput--huge,
    &.k-Form-TextInput--giant {
      --input-button-border-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        --input-button-border-radius: ${pxToRem(8)};
      }
    }
  }
  &.k-Form-TextInput--rounded {
    --input-button-border-radius: var(--input-height)
  }
`

export const TextInputWithIcon = ({
  disabled,
  icon,
  iconPosition,
  accessibilityLabel,
  id,
  buttonProps,
  ...others
}) => {
  return (
    <StyledTextInputWithIcon
      className={classNames(
        'k-Form-TextInputWithIcon',
        `k-Form-TextInputWithIcon--icon_${iconPosition}`,
      )}
    >
      {accessibilityLabel && (
        <VisuallyHidden id={`${id}__iconLabel`}>
          {accessibilityLabel}
        </VisuallyHidden>
      )}
      <TextInput
        id={id}
        aria-labelledby={accessibilityLabel ? `${id}__iconLabel` : null}
        {...others}
        className={classNames(
          'k-Form-TextInputWithIcon__input',
          others.className,
        )}
        disabled={disabled}
      />
      {isEmpty(buttonProps) ? (
        <span
          aria-hidden="true"
          className={classNames('k-Form-TextInputWithIcon__icon', {
            'k-Form-TextInputWithIcon__icon--disabled': disabled,
          })}
        >
          {icon}
        </span>
      ) : (
        <button
          {...buttonProps}
          className={classNames('k-u-reset-button',
            'k-Form-TextInputWithIcon__button',
            'k-Form-TextInputWithIcon__icon', {
            'k-Form-TextInputWithIcon__icon--disabled': disabled,
          })}
        >
          {icon}
        </button>
      )}
    </StyledTextInputWithIcon>
  )
}

TextInputWithIcon.propTypes = {
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  buttonProps: PropTypes.object,
}

TextInputWithIcon.defaultProps = {
  accessibilityLabel: '',
  disabled: false,
  iconPosition: 'left',
  buttonProps: {},
}
