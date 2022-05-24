import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import styled from 'styled-components'
import classNames from 'classnames'
import { RadioButton } from '../../form/radio-button'
import { pxToRem } from '../../../helpers/utils/typography'
import { Label } from '../../form/label'
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated'

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
  fontWeight,
  paragraphStyle,
  labelProps,
  ...props
}) => {

  checkDeprecatedWeights(weight)
  
  return (
    <StyledRadioButtonSet
      className={classNames(
        'k-Form-RadioButtonSet',
        className,
        `k-Form-RadioButtonSet--${variant || 'orion'}`,
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
            variant={variant || null}
            design={design}
            error={error}
            size={size}
            fontWeight={fontWeight}
            paragraphStyle={paragraphStyle}
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
}

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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: deprecated(
    PropTypes.oneOf(['andromeda', 'orion']),
    'Please use the RadioSet component instead',
  ),
  design: PropTypes.oneOf(['disc', 'check']),
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fontWeight: PropTypes.oneOf(['400', '500', '600']),
  paragraphStyle: PropTypes.bool,
}

RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  label: null,
  items: [],
  design: 'disc',
  disabled: false,
  labelProps: {},
  size: 'medium',
  fontWeight: '500',
  paragraphStyle: false,
}
