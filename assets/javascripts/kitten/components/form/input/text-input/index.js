import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button } from '../../../action/button'
import { TextareaAutoResize } from '../textarea-auto-resize'
import { StyledInputWrapper } from './styles'

export const TextInput = React.forwardRef(
  (
    {
      id,
      valid,
      error,
      disabled,
      name,
      digits,
      size,
      center,
      tag,
      className,
      style,
      rounded,
      darkBackground,
      has,
      buttonProps,
      buttonIsInset,
      icon,
      iconPosition,
      iconAccessibilityLabel,
      ['aria-describedby']: ariaDescribedBy,
      value,
      defaultValue,
      onChange,
      limit,
      unit,
      unitIsWord,
      wrapperProps,
      ...others
    },
    ref,
  ) => {
    console.log('inner value', value)
    const [length, setLength] = useState(value || defaultValue || ''.length)

    const digitsClass = !!digits
      ? `k-TextInput-hasDigits k-TextInput-hasDigits_${digits}`
      : null
    const hasClass = !!has
      ? `k-TextInput--has${has[0].toUpperCase()}${has.slice(1)}`
      : null

    const describedBy =
      has === 'icon' && iconAccessibilityLabel
        ? `${ariaDescribedBy} ${id}__iconLabel`
        : ariaDescribedBy

    const InputComponent = (() => {
      switch (tag) {
        case 'autoresize':
          return TextareaAutoResize
        default:
          return tag
      }
    })()
    const ButtonComponent = buttonIsInset ? 'button' : Button

    return (
      <StyledInputWrapper
        {...wrapperProps}
        className={classNames(
          'k-TextInput__wrapper',
          `k-TextInput__wrapper--${size}`,
          wrapperProps?.className,
          {
            'k-TextInput__isTextarea': ['textarea', 'autoresize'].includes(tag),
            [`k-TextInput__wrapper--icon_${iconPosition}`]: has === 'icon',
            'k-TextInput__wrapper--hasUnit': has === 'unit',
            'k-TextInput__wrapper--hasDigits': !!digits,
            'k-TextInput__wrapper--button_inset': !!buttonIsInset,
          },
        )}
      >
        {has === 'icon' && iconAccessibilityLabel && (
          <span id={`${id}__iconLabel`} className="k-u-a11y-visuallyHidden">
            {iconAccessibilityLabel}
          </span>
        )}
        <InputComponent
          ref={ref || null}
          id={id}
          aria-describedby={describedBy}
          disabled={disabled}
          name={name}
          className={classNames(
            'k-TextInput',
            className,
            digitsClass,
            hasClass,
            {
              'k-TextInput--valid': valid,
              'k-TextInput--error': error,
              'k-TextInput--disabled': disabled,
              'k-TextInput--alignCenter': center,
              'k-TextInput--rounded': rounded,
              'k-TextInput--darkBackground': darkBackground,
            },
          )}
          style={
            !!digits ? { '--input-content-width': digits, ...style } : style
          }
          {...(defaultValue && { defaultValue })}
          {...(value && { value })}
          onChange={e => {
            setLength(e?.target?.value?.length || 0)
            onChange(e)
          }}
          {...others}
        />

        {['textarea', 'autoresize'].includes(tag) && (
          <div className="k-TextInput__textareaGradient" />
        )}

        {has === 'button' && (
          <ButtonComponent
            type="button"
            rounded={rounded}
            {...buttonProps}
            className={classNames(
              'k-TextInput__button',
              buttonProps?.className,
            )}
            disabled={disabled || buttonProps?.disabled}
            size={size}
          />
        )}

        {has === 'icon' && (
          <span
            aria-hidden="true"
            className={classNames('k-TextInput__icon', {
              'k-TextInput__icon--disabled': disabled,
            })}
          >
            {icon}
          </span>
        )}

        {has === 'limit' && (
          <div
            className={classNames('k-TextInput__limitNumber', {
              'k-TextInput__limitNumber--disabled': disabled,
              'k-TextInput__limitNumber--error': length > limit,
            })}
          >
            {limit - length}
          </div>
        )}

        {has === 'unit' && (
          <span
            className={classNames('k-TextInput__unit', {
              'k-TextInput__unit--unitIsWord': unitIsWord,
            })}
          >
            {unit}
          </span>
        )}
      </StyledInputWrapper>
    )
  },
)

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.oneOf(['input', 'textarea', 'autoresize']),
  ]),
  valid: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  digits: PropTypes.number,
  rounded: PropTypes.bool,
  darkBackground: PropTypes.bool,

  has: PropTypes.oneOf([null, 'button', 'icon', 'limit', 'unit']),
  buttonProps: PropTypes.object,
  buttonIsInset: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconAccessibilityLabel: PropTypes.string,
  ['aria-describedby']: PropTypes.string,
  onChange: PropTypes.func,
  limit: PropTypes.number,
  unit: PropTypes.node,
  unitIsWord: PropTypes.bool,
  wrapperProps: PropTypes.object,
}

TextInput.defaultProps = {
  tag: 'input',
  valid: false,
  error: false,
  size: 'medium',
  center: false,
  disabled: false,
  name: 'text',
  digits: null,
  rounded: false,
  darkBackground: false,

  has: null,
  buttonProps: {},
  buttonIsInset: false,
  icon: null,
  iconPosition: 'left',
  onChange: () => {},
  limit: 80,
  unit: 'ƒ',
  unitIsWord: false,
  wrapperProps: {},
}
