import domElementHelper from '../element-helper'

export const nativeInputValueSetter = (() => {
  if (!domElementHelper.canUseDom()) return false

  const valueDescriptor = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value',
  )
  return valueDescriptor.set
})()
