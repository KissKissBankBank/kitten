import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Grid, GridCol } from '../../../components/grid/grid'
import { TextInputWithUnit } from '../../../components/form/text-input-with-unit'
import { Text } from '../../../components/typography/text'
import { Label } from '../../../components/form/label'
import { Button } from '../../../components/buttons/button/button'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'

const StyledFormContainer = styled.form`
  margin: 0;
  padding: 0;

  .k-Form-TextInputWithUnitForm__grid--center {
    display: flex;
    justify-content: center;
  }

  .k-Form-TextInputWithUnitForm__submit {
    @media (min-width: ${ScreenConfig.S.min}px) {
      width: 100%;
    }
  }
`

export class TextInputWithUnitForm extends PureComponent {
  static propTypes = {
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

  static defaultProps = {
    inputId: '',
    inputLabel: '',
    inputUnit: '',
    buttonLabel: '',
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

  render() {
    const {
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
    } = this.props

    return (
      <StyledFormContainer onSubmit={onFormSubmit}>
        <Grid
          className={classNames(
            'k-Form-TextInputWithUnitForm__grid',
            `k-Form-TextInputWithUnitForm__grid--${align}`,
            'k-u-margin-top-triple',
            'k-u-margin-bottom-triple',
            {
              'k-u-margin-bottom-single--important': inputIsOnError,
            },
          )}
        >
          <GridCol
            col-m={version === 'tiny' ? 0 : 5}
            col-xs={version === 'tiny' ? 0 : 7}
          >
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

        <Grid>
          <GridCol col="12" className={`k-u-align-${align}`}>
            <Button
              big
              modifier="helium"
              type="submit"
              onMouseEnter={onButtonMouseEnter}
              onMouseLeave={onButtonMouseLeave}
              disabled={formIsDisabled}
              className={classNames(
                'k-Form-TextInputWithUnitForm__submit',
                `k-Form-TextInputWithUnitForm__grid--${version}`,
              )}
            >
              {buttonLabel}
            </Button>
          </GridCol>
        </Grid>
      </StyledFormContainer>
    )
  }
}
