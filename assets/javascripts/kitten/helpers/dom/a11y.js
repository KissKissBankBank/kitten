const notMinusTabindex = ':not([tabindex="-1"])'
const notDisabled = ':not([disabled])'

const FOCUSABLE_ELEMENTS = [
  '[contenteditable="true"]',
  '[href]',
  '[tabindex]',
  'area',
  'button',
  'details',
  'iframe',
  'input',
  'select',
  'textarea',
]

const getFocusableElements = force =>
  force === 'all'
    ? FOCUSABLE_ELEMENTS.join(', ')
    : FOCUSABLE_ELEMENTS.map(
        el => `${el}${notMinusTabindex}${notDisabled}`,
      ).join(', ')

const isVisible = element => {
  const { display, visibility } = window.getComputedStyle(element)
  const isVisible = element.offsetWidth > 0 && element.offsetHeight > 0

  return display !== 'none' && visibility !== 'hidden' && isVisible
}

export const getFocusableElementsFrom = (element, { force } = {}) =>
  [...element.querySelectorAll(getFocusableElements(force))].filter(el =>
    force ? true : isVisible(el),
  )

export const keyboardNavigation = elements => {
  const currentElementIndex = elements.indexOf(document.activeElement)
  const lastElementIndex = elements.length - 1

  if (currentElementIndex < 0) return

  return {
    next: () => {
      const nextElement = elements[currentElementIndex + 1] || elements[0]

      nextElement.focus()
    },
    prev: () => {
      const prevElement =
        elements[currentElementIndex - 1] || elements[lastElementIndex]

      prevElement.focus()
    },
  }
}
