import React from 'react'
import { Marger } from '../../../layout/marger'
import { DropdownSelect } from '../../../form/dropdown-select'

export const FieldSelect = ({ 
  hideLabel,
  combobox,
  labelPropsGetter,
  variant,
  a11yStatusError,
  a11yStatusValid,
  a11ySelectionMessageDisplayer,
  onInputChange,
  onMenuClose,
  onMenuOpen,
  openOnLoad,
  uniqLabelOnSearch,
  menuZIndex,
  ...field
}) => (
  <Marger top="1">
    <DropdownSelect 
      id={field.id}
      labelText={field.labelText}
      options={field.options}
      placeholder={field.placeholder}
      className={field.className}
      onInputChange={field.onInputChange}
      onChange={field.onChange}
      error={field.error}
      valid={field.valid}
      disabled={field.disabled}
      name={field.name}
      value={field.value}
      searchable={field.searchable}
      hideLabel={hideLabel}
      combobox={combobox}
      labelPropsGetter={labelPropsGetter}
      variant={variant}
      a11yStatusError={a11yStatusError}
      a11yStatusValid={a11yStatusValid}
      a11ySelectionMessageDisplayer={a11ySelectionMessageDisplayer}
      onMenuClose={onMenuClose}
      onMenuOpen={onMenuOpen}
      openOnLoad={openOnLoad}
      uniqLabelOnSearch={uniqLabelOnSearch}
      menuZIndex={menuZIndex}
    />
  </Marger>
)
