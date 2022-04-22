import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { CheckboxButton } from '../../form/checkbox-button'
import { pxToRem } from '../../../helpers/utils/typography'
import { Label } from '../../form/label'

const StyledCheckboxButtonSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.3rem;

  & > legend {
    padding: 0;
  }

  .k-Form-CheckboxButtonSet__label {
    margin-bottom: ${pxToRem(10)};
  }

  .k-Form-CheckboxButtonSet__checkbox {
    margin: ${pxToRem(5)} 0;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const CheckboxButtonSet = ({
  items,
  disabled,
  className,
  name,
  error,
  label,
  children,
  ...props
}) => (
  <StyledCheckboxButtonSet
    className={classNames('k-Form-CheckboxButtonSet', className)}
    disabled={disabled}
    {...props}
  >
    {label && (
      <Label tag="legend" className="k-Form-CheckboxButtonSet__label">
        {label}
      </Label>
    )}
    {children && !label && <legend>{children}</legend>}
    {items.map(({ id, className, ...itemProps }) => (
      <CheckboxButton
        id={id}
        error={error}
        name={name}
        key={id}
        {...itemProps}
        className={classNames('k-Form-CheckboxButtonSet__checkbox', className)}
      />
    ))}
  </StyledCheckboxButtonSet>
)

CheckboxButtonSet.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string.isRequired,
      defaultChecked: PropTypes.bool,
      children: PropTypes.node,
    }),
  ),
  disabled: PropTypes.bool,
}

CheckboxButtonSet.defaultProps = {
  name: 'checkboxSet',
  error: false,
  label: null,
  items: [
    {
      label: null,
      children: null,
      defaultChecked: true,
      id: 'myCheckboxButton', // Replace by a real value
    },
  ],
  disabled: false,
}
