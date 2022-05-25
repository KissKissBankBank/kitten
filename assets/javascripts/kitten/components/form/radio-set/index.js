import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { Radio } from '../../form/radio'
import { pxToRem } from '../../../helpers/utils/typography'
import { Label } from '../../form/label'
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledRadioSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 1.3rem;

  & > legend {
    padding: 0;
  }

  .k-Form-RadioSet__legend {
    margin-bottom: ${pxToRem(10)};
  }

  .k-Form-RadioSet__radioContainer {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(5)} 0;
  }
`

export const RadioSet = ({
  items,
  disabled,
  className,
  name,
  error,
  design,
  label,
  children,
  fontWeight, // Deprecated
  weight,
  labelProps,
  ...props
}) => {
  
  checkDeprecatedWeights(weight)

  return ( 
    <StyledRadioSet
      className={classNames('k-Form-RadioSet', className)}
      disabled={disabled}
      {...props}
    >
      {label && (
        <Label
          tag="legend"
          {...labelProps}
          className={classNames('k-Form-RadioSet__legend', labelProps.className)}
        >
          {label}
        </Label>
      )}
      {children && !label && <legend>{children}</legend>}

      <div className="k-Form-RadioSet__radioContainer">
        {items.map(({ id, className, ...itemProps }) => (
          <Radio
            id={id}
            design={design}
            error={error}
            fontWeight={fontWeight || weight}
            name={name}
            key={id}
            {...itemProps}
            className={classNames('k-Form-RadioSet__radio', className)}
          />
        ))}
      </div>
    </StyledRadioSet>
  )
}

RadioSet.propTypes = {
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
  design: PropTypes.oneOf(['disc', 'check']),
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  fontWeight: deprecated(PropTypes.string, 'Prefere use `weight` prop instead'),
  weight: PropTypes.oneOf(['400', '500', '600']),
}

RadioSet.defaultProps = {
  name: 'radioSet',
  error: false,
  label: null,
  items: [],
  design: 'disc',
  disabled: false,
  labelProps: {},
  weight: '500',
}
