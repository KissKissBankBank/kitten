import React from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { Grid as GridBase, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'
import { Text } from 'kitten/components/typography/text'
import { Label } from 'kitten/components/form/label'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { ScreenConfig } from 'kitten/constants/screen-config'

const Button = Radium(ButtonBase)
const Grid = Radium(GridBase)
const Marger = Radium(MargerBase)

export const TextInputWithUnitForm = ({
  align,
  formIsDisabled,
  inputId,
  inputPlaceholder,
  inputUnit,
  inputLabel,
  inputDefaultValue,
  inputIsOnError,
  errorMessage,
  buttonLabel,
  onButtonMouseEnter,
  onButtonMouseLeave,
  onFormSubmit,
  onInputBlur,
  onInputChange,
  onInputFocus,
  version,
}) => {
  const formStyle = align === 'center' && styles.form.centered
  const isTinyVersion = version === 'tiny'

  const gridColProps = isTinyVersion ? {} : { 'col-xs': 7, 'col-m': 5 }

  const buttonStyles = isTinyVersion ? styles.button.tinyVersion : styles.button

  return (
    <form onSubmit={onFormSubmit} style={styles.form.grid}>
      <Marger top="3" bottom={!inputIsOnError ? 3 : 1}>
        <Grid style={formStyle}>
          <GridCol {...gridColProps}>
            <Marger bottom="1.5">
              <Label size="micro" htmlFor={inputId}>
                {inputLabel}
              </Label>
            </Marger>

            <Marger top="1.5" bottom={inputIsOnError ? 1 : null}>
              <TextInputWithUnit
                error={inputIsOnError}
                id={inputId}
                type="number"
                placeholder={inputPlaceholder}
                unit={inputUnit}
                disabled={formIsDisabled}
                onBlur={onInputBlur}
                onChange={onInputChange}
                onFocus={onInputFocus}
                defaultValue={inputDefaultValue}
                autoComplete="off"
              />
            </Marger>

            {inputIsOnError && (
              <Marger top="1">
                <Text size="micro" color="error" weight="regular">
                  {errorMessage}
                </Text>
              </Marger>
            )}
          </GridCol>
        </Grid>
      </Marger>

      <Marger style={formStyle}>
        <StyleRoot>
          <Button
            size="big"
            modifier="helium"
            type="submit"
            aria-label={buttonLabel}
            style={buttonStyles}
            onMouseEnter={onButtonMouseEnter}
            onMouseLeave={onButtonMouseLeave}
            disabled={formIsDisabled}
          >
            {buttonLabel}
          </Button>
        </StyleRoot>
      </Marger>
    </form>
  )
}

TextInputWithUnitForm.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputLabel: PropTypes.string.isRequired,
  inputUnit: PropTypes.string.isRequired,
  inputDefaultValue: PropTypes.string,
  onInputBlur: PropTypes.func,
  onInputChange: PropTypes.func,
  onInputFocus: PropTypes.func,
  inputIsOnError: PropTypes.bool,
  errorMessage: PropTypes.string,

  buttonLabel: PropTypes.string.isRequired,
  onButtonMouseEnter: PropTypes.func,
  onButtonMouseLeave: PropTypes.func,

  align: PropTypes.string,
  formIsDisabled: PropTypes.bool,
  onFormSubmit: PropTypes.func,

  version: PropTypes.oneOf(['default', 'tiny']),
}

TextInputWithUnitForm.defaultProps = {
  inputPlaceholder: '',
  inputDefaultValue: '',
  onInputBlur: () => {},
  onInputChange: () => {},
  onInputFocus: () => {},
  inputIsOnError: false,
  errorMessage: '',
  onButtonMouseEnter: () => {},
  onButtonMouseLeave: () => {},
  formIsDisabled: false,
  onFormSubmit: () => {},
  align: 'center',
  version: 'default',
}

const styles = {
  form: {
    grid: {
      margin: 0,
      padding: 0,
    },

    centered: {
      display: 'flex',
      justifyContent: 'center',
    },
  },

  button: {
    [`@media (max-width: ${ScreenConfig['XS'].max}px)`]: {
      width: '100%',
    },

    tinyVersion: {
      width: '100%',
    },
  },
}
