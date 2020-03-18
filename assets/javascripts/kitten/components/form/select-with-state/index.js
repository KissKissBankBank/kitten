// Select that uses https://github.com/JedWatson/react-select
// with default states and handles the current value as a local state.
//
// Also handles multi-level options. You can give `children: []` to each option
// and fill it with options to represent a hierarchy.
//
// E.g:
//    <SelectWithState options={
//      { label: 'Cat',
//        children: [{ label: 'A' }, { label: 'B' }]
//      } />
//
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Select from 'react-select'

export const SelectWithState = ({
  value,
  onChange,
  onInputChange,
  className,
  tiny,
  error,
  valid,
  disabled,
  labelText,
  autoFill,
  id,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState({ value })

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  const handleChange = option => {
    const value = option && option.value ? option : { value: null, label: null }

    setSelectedValue(value)
    onChange(value)
    onInputChange({ value, name })
  }

  const handleLightChange = e => {
    const value = e.target.value

    setSelectedValue(value)
    onChange({ value })
  }

  const onKeyDown = event => {
    const enterKeyCode = 13
    const spaceKeyCode = 32

    if ([enterKeyCode, spaceKeyCode].includes(event.keyCode)) {
      event.preventDefault()
      event.stopPropagation()
      onRemove(event)
    }
  }

  const selectClassName = classNames('k-Select', className, {
    'k-Select--tiny': tiny,
    'is-error': error,
    'is-valid': valid,
    'is-disabled': disabled,
  })

  return (
    <div className={selectClassName}>
      {labelText && (
        <label className="k-Select__label" htmlFor={id}>
          {labelText}
        </label>
      )}

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
          onChange={handleLightChange}
        />
      )}

      <SelectWithMultiLevel
        id={id}
        value={selectedValue}
        onKeyDown={onKeyDown}
        onChange={handleChange}
        disabled={disabled}
        labelText={labelText}
        {...props}
      />
    </div>
  )
}

const SelectWithMultiLevel = ({
  options,
  inputProps,
  labelText,
  id,
  ...props
}) => {
  // Turns a hierarchy of options with `children` into a flat array
  // of options with a `level` of 1, 2 or null.
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

  // React-Select allows changing the way options are rendered.
  const optionRenderer = ({ level, label }) => {
    if (!level) return label

    return <span className={`k-Select__option--level${level}`}>{label}</span>
  }

  if (labelText && !inputProps['aria-labelledby']) {
    inputProps['aria-labelledby'] = id
  }

  return (
    <Select
      optionRenderer={optionRenderer}
      id={id}
      {...props}
      inputProps={inputProps}
      options={flattenedOptions()}
    />
  )
}

SelectWithState.propTypes = {
  autoFill: PropTypes.string,
}

SelectWithState.defaultProps = {
  onChange: function() {},
  onInputChange: function() {},
  clearable: false,
  searchable: false,
  deleteRemoves: false,
  multi: false,
  labelText: null,
  error: false,
  valid: false,
  disabled: false,
  tiny: false,
  name: null,
  inputProps: {},
  autoFill: undefined,
}

// DEPRECATED: do not use default export.
export default SelectWithState
