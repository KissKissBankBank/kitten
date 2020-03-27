import {
  A11Y_FIRST_FOCUS_REACHED_EVENT,
  A11Y_LAST_FOCUS_REACHED_EVENT,
  dispatchEvent,
} from './events'

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

const focusableElements = FOCUSABLE_ELEMENTS.map(
  el => `${el}${notMinusTabindex}${notDisabled}`,
).join(', ')

const isVisible = element => {
  const { display, visibility } = window.getComputedStyle(element)
  const isVisible = element.offsetWidth > 0 && element.offsetHeight > 0

  return display !== 'none' && visibility !== 'hidden' && isVisible
}

export const getFocusableElementsFrom = root =>
  [...root.querySelectorAll(focusableElements)].filter(el => isVisible(el))

export const keyboardNavigation = (
  elements,
  {
    events = {
      prev: A11Y_FIRST_FOCUS_REACHED_EVENT,
      next: A11Y_LAST_FOCUS_REACHED_EVENT,
    },
    triggeredElement,
  } = {},
) => {
  const currentElementIndex = elements.indexOf(document.activeElement)
  const lastElementIndex = elements.length - 1

  if (currentElementIndex < 0) return {}

  return {
    next: () => {
      const nextElement = elements[currentElementIndex + 1]

      nextElement
        ? nextElement.focus()
        : dispatchEvent(events.next, triggeredElement)()
    },
    prev: () => {
      const prevElement = elements[currentElementIndex - 1]

      prevElement
        ? prevElement.focus()
        : dispatchEvent(events.prev, triggeredElement)()
    },
  }
}
