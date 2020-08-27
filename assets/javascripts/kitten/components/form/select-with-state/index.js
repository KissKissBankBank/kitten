import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Select from 'react-select'
import TYPOGRAPHY from '../../../constants/typography-config'
import { stepToRem, pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const Wrapper = styled.div`
  .k-Select__valid {
    .k-Select__control {
      border-color: ${COLORS.tertiary2};
    }
    .k-Select__indicator-separator {
      border-color: ${COLORS.tertiary2};
    }
  }

  .k-Select__error {
    .k-Select__control {
      border-color: ${COLORS.error3};
    }
    .k-Select__indicator-separator {
      border-color: ${COLORS.error3};
    }
  }

  .k-Select__disabled {
    .k-Select__control {
      background-color: ${COLORS.line1};
      border-color: ${COLORS.line2};
    }
    .k-Select__indicator-separator {
      border-color: ${COLORS.line2};
    }
  }

  .k-Select__tiny {
    .k-Select__control {
      height: ${pxToRem(40)};
    }
    .k-Select__indicator {
      width: ${pxToRem(30)};
    }
  }

  .k-Select__huge {
    .k-Select__control {
      height: ${pxToRem(70)};
    }
    .k-Select__indicator {
      width: ${pxToRem(50)};
    }
  }

  .k-Select__giant {
    .k-Select__control {
      height: ${pxToRem(80)};
    }
    .k-Select__indicator {
      width: ${pxToRem(60)};
    }
  }
`

const StyledSelect = styled(Select)`
  .k-Select__control {
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: 0;
    background-color: ${COLORS.background1};
    height: ${pxToRem(50)};
    box-shadow: none;

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
  }

  .k-Select__indicator-separator {
    border: ${pxToRem(1)} solid ${COLORS.line1};
    margin-top: 0;
    margin-bottom: 0;
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

  .k_Select-option__selected {
    background-color: ${COLORS.background3};
  }

  .k_Select-option__focused {
    background-color: ${COLORS.background3};
  }

  .k_Select-option__disabled {
    color: ${COLORS.font2};
    cursor: initial;

    :hover,
    :focus {
      background-color: ${COLORS.background1};
    }
  }

  .k_Select-option__level2 {
    padding-left: ${pxToRem(30)};
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
`

const DefaultOption = ({
  innerProps,
  innerRef,
  isDisabled,
  isSelected,
  isFocused,
  data,
  children,
}) => {
  return (
    <StyledOption
      className={classNames({
        'k_Select-option__selected': isSelected,
        'k_Select-option__focused': isFocused,
        'k_Select-option__disabled': isDisabled,
        'k_Select-option__level2': data.level === 2,
      })}
      ref={innerRef}
      {...innerProps}
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
    <Wrapper>
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
        className={classNames(className, {
          'k-Select__tiny': tiny,
          'k-Select__huge': huge,
          'k-Select__giant': giant,
          'k-Select__valid': valid,
          'k-Select__error': error,
          'k-Select__disabled': disabled,
        })}
        id={name}
        name={name}
        defaultValue={flattenedOptions().find(opt => opt.value === value)}
        isOptionDisabled={data => !!data.disabled}
        onChange={val => {
          onChange(val)
        }}
        isSearchable={searchable}
        isDisabled={disabled}
        isClearable={clearable}
        aria-labelledby=""
        options={flattenedOptions()}
        components={{ Option: CustomOption || DefaultOption }}
        noOptionsMessage={() => (
          <span className="k-Select__no-result">{noResultText}</span>
        )}
        {...props}
      />
    </Wrapper>
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
  CustomOption: null,
}

export default SelectWithState
