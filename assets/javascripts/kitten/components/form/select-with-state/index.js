import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Select from 'react-select'
import TYPOGRAPHY from '../../../constants/typography-config'
import { stepToRem, pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const StyledSelect = styled(Select)`

  .k-Select__control {
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: 0px;
    background-color: ${COLORS.background1};
    height: ${pxToRem(50)};
    box-shadow: none;
    
    ${props =>
      props.tiny &&
      css`
        height: ${pxToRem(40)};
      `}
    
    ${props =>
      props.huge &&
      css`
        height: ${pxToRem(70)};
      `}
    
    ${props =>
      props.giant &&
      css`
        height: ${pxToRem(90)};
      `}

    ${props =>
      props.valid &&
      css`
        border-color: ${COLORS.valid2};
      `}

    ${props =>
      props.error &&
      css`
        border-color: ${COLORS.error3};
      `}
    
    ${props =>
      props.isDisabled &&
      css`
        background-color: ${COLORS.line1};
        border-color: ${COLORS.line2};
      `}

    :hover,
    :focus {
      color: ${COLORS.font1};
      border-color: ${COLORS.line2};
    }
  }

  .k-Select__indicator {
    display: flex;
    justify-content: center;
    color: ${COLORS.font1};
    width: ${pxToRem(40)};
    
    ${props =>
      props.tiny &&
      css`
        width: ${pxToRem(30)};
      `}
    
    ${props =>
      props.huge &&
      css`
        width: ${pxToRem(50)};
      `}
    
    ${props =>
      props.giant &&
      css`
        width: ${pxToRem(60)};
      `}
  }

  .k-Select__indicator-separator {
    border: ${pxToRem(1)} solid ${COLORS.line1};
    margin-top: 0;
    margin-bottom: 0;

    ${props =>
      props.valid &&
      css`
        border-color: ${COLORS.valid2};
      `}

    ${props =>
      props.error &&
      css`
        border-color: ${COLORS.error3};
      `}
    
    ${props =>
      props.isDisabled &&
      css`
        border-color: ${COLORS.line2};
      `}
  }

  .k-Select__value-container {
    font-size: ${stepToRem(-1)};
    ${TYPOGRAPHY.fontStyles.light};
    line-height: 1.3;
    color: ${COLORS.font1};
  }
  
  .k-Select__no-result {
    font-size: ${stepToRem(-1)};
    ${TYPOGRAPHY.fontStyles.light};
    color: ${COLORS.font2};
  }
  
  .k-Select__menu {
    margin: 0;
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-top: 0;
    border-radius: 0;
    background-color: ${COLORS.background1};
    box-shadow: none;
  }
  
 .k-Select__menu-list {
    padding: 0;
  }
`

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  height: ${pxToRem(50)};
  cursor: pointer;
  padding-left: ${pxToRem(15)};
  ${TYPOGRAPHY.fontStyles.light};
  font-size: ${stepToRem(-1)};

  :hover,
  :focus {
    background-color: ${COLORS.background3};
  }

  ${props =>
    props.isSelected &&
    css`
      background-color: ${COLORS.background3};
    `}

  ${props =>
    props.isDisabled &&
    css`
      color: ${COLORS.font2};
      cursor: initial;

      :hover,
      :focus {
        background-color: ${COLORS.background1};
      }
    `}
  
  ${props =>
    props.level === 2 &&
    css`
      padding-left: ${pxToRem(30)};
    `}
`

const CustomOption = ({
  innerProps,
  isDisabled,
  isSelected,
  data,
  children,
}) => {
  return (
    <StyledOption
      {...innerProps}
      isSelected={isSelected}
      isDisabled={isDisabled}
      level={data.level}
    >
      {children}
    </StyledOption>
  )
}

export const SelectWithState = ({
  onChange,
  value,
  tiny,
  huge,
  giant,
  error,
  valid,
  disabled,
  searchable,
  clearable,
  options,
  autoFill,
  name,
  noResultText,
  className,
  CustomOption,
  ...props
}) => {
  const flattenedOptions = () => {
    const flatOptions = []

    options.map(option => {
      if (option.children) {
        option.level = 1
        flatOptions.push(option)

        option.children.map(opt => {
          opt.level = 2
          flatOptions.push(opt)
        })
      } else {
        flatOptions.push(option)
      }
    })

    return flatOptions
  }

  return (
    <div>
      {autoFill && (
        <input
          autoComplete={autoFill}
          x-autocompletetype={autoFill}
          xautocompletetype={autoFill}
          autocompletetype={autoFill}
          name={autoFill}
          style={{
            position: 'absolute',
            zIndex: '-1',
            opacity: '0',
          }}
          onChange={e => {
            onChange({ value: e.target.value })
          }}
        />
      )}

      <StyledSelect
        classNamePrefix="k-Select"
        className={className}
        id={name}
        name={name}
        defaultValue={flattenedOptions().find(opt => opt.value === value)}
        tiny={tiny}
        huge={huge}
        giant={giant}
        error={error}
        valid={valid}
        isOptionDisabled={data => !!data.disabled}
        onChange={val => {
          onChange(val)
        }}
        isSearchable={searchable}
        isDisabled={disabled}
        isClearable={clearable}
        aria-labelledby=""
        options={flattenedOptions()}
        components={{ Option: CustomOption }}
        noOptionsMessage={() => (
          <span className="k-Select__no-result">{noResultText}</span>
        )}
        {...props}
      />
    </div>
  )
}

SelectWithState.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  clearable: PropTypes.bool,
  searchable: PropTypes.bool,
  error: PropTypes.bool,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  tiny: PropTypes.bool,
  huge: PropTypes.bool,
  giant: PropTypes.bool,
  noResultText: PropTypes.string,
  autoFill: PropTypes.string,
  className: PropTypes.string,
  CustomOption: PropTypes.func,
}

SelectWithState.defaultProps = {
  onChange: () => null,
  clearable: false,
  searchable: false,
  error: false,
  valid: false,
  disabled: false,
  tiny: false,
  huge: false,
  giant: false,
  noResultText: '',
  value: null,
  CustomOption,
}

export default SelectWithState
