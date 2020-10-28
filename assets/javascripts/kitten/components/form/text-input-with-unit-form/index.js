import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Grid as KittenGrid, GridCol } from '../../../components/grid/grid'
import { TextInputWithUnit } from '../../../components/form/text-input-with-unit'
import { Text } from '../../../components/typography/text'
import { Label } from '../../../components/form/label'
import { Button as KittenButton } from '../../../components/buttons/button'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledFormContainer = styled.form`
  margin: 0;
  padding: 0;
`

const StyledGridPosition = styled(({ align, ...others }) => (
  <KittenGrid {...others} />
))`
  ${({ align }) =>
    align === 'center' &&
    css`
      display: flex;
      justify-content: center;
    `}
`

const StyledButton = styled(({ version, ...others }) => (
  <KittenButton {...others} />
))`
  @media (min-width: ${ScreenConfig.S.min}px) {
    width: 100%:
  }
  ${({ version }) =>
    version === 'tiny' &&
    css`
      width: 100%;
    `}
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
        <Marger top="3" bottom={!inputIsOnError ? 3 : 1}>
          <StyledGridPosition align={align}>
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
          </StyledGridPosition>
        </Marger>

        <StyledGridPosition align={align}>
          <StyledButton
            size="big"
            modifier="helium"
            type="submit"
            aria-label={buttonLabel}
            onMouseEnter={onButtonMouseEnter}
            onMouseLeave={onButtonMouseLeave}
            disabled={formIsDisabled}
            version={version}
          >
            {buttonLabel}
          </StyledButton>
        </StyledGridPosition>
      </StyledFormContainer>
    )
  }
}
