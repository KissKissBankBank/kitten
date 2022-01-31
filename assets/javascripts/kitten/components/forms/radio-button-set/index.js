import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { RadioButton } from '../../forms/radio-button'
import { pxToRem } from '../../../helpers/utils/typography'
import { Label } from '../../forms/label'

const StyledRadioButtonSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 1.3rem;

  & > legend {
    padding: 0;
  }

  .k-Form-RadioButtonSet__label {
    margin-bottom: ${pxToRem(10)};
  }

  .k-Form-RadioButtonSet__radioContainer {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(5)} 0;

    .k-Form-RadioButtonSet__radioButton.k-Form-RadioButton {
      margin: 0;
    }
  }
`

export const RadioButtonSet = ({
  items,
  disabled,
  className,
  name,
  error,
  variant,
  design,
  label,
  children,
  size,
  labelProps,
  ...props
}) => (
  <StyledRadioButtonSet
    className={classNames(
      'k-Form-RadioButtonSet',
      className,
      `k-Form-RadioButtonSet--${variant}`,
    )}
    disabled={disabled}
    {...props}
  >
    {label && (
      <Label
        tag="legend"
        {...labelProps}
        className={classNames(
          'k-Form-RadioButtonSet__label',
          labelProps.className,
        )}
      >
        {label}
      </Label>
    )}
    {children && !label && <legend>{children}</legend>}
    <div className="k-Form-RadioButtonSet__radioContainer">
      {items.map(({ id, className, ...itemProps }) => (
        <RadioButton
          id={id}
          variant={variant}
          design={design}
          error={error}
          size={size}
          name={name}
          key={id}
          {...itemProps}
          className={classNames(
            'k-Form-RadioButtonSet__radioButton',
            className,
          )}
        />
      ))}
    </div>
  </StyledRadioButtonSet>
)

RadioButtonSet.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      defaultChecked: PropTypes.bool,
    }),
  ),
  size: PropTypes.oneOf(['small', 'regular', 'big']),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  design: PropTypes.oneOf(['disc', 'check']),
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
}

RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  label: null,
  items: [
    {
      text: 'filter 1',
      children: 'lorem ipsum dolor',
      defaultChecked: true,
      id: 'myRadioButton', // Replace by a real value
    },
  ],
  variant: 'orion',
  design: 'disc',
  disabled: false,
  labelProps: {},
  size: 'regular',
}
