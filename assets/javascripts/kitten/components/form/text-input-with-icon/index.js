import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import classNames from 'classnames'

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
        stroke: var(--color-grey-500);
      }
      &[fill]:not([fill='none']),
      & [fill]:not([fill='none']) {
        fill: var(--color-grey-500);
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
`

export const TextInputWithIcon = ({
  disabled,
  icon,
  iconPosition,
  accessibilityLabel,
  id,
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
      <span
        aria-hidden="true"
        className={classNames('k-Form-TextInputWithIcon__icon', {
          'k-Form-TextInputWithIcon__icon--disabled': disabled,
        })}
      >
        {icon}
      </span>
    </StyledTextInputWithIcon>
  )
}

TextInputWithIcon.propTypes = {
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  icon: PropTypes.node.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

TextInputWithIcon.defaultProps = {
  accessibilityLabel: '',
  disabled: false,
  iconPosition: 'left',
}
