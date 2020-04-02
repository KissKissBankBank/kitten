import domElementHelper from '../element-helper'
import max from 'lodash/fp/max'
import min from 'lodash/fp/min'
import { pxToRem } from '../../utils/typography'

export const cssPropertyDistributor = ({
  elements = [],
  property = '',
  direction = 'max',
}) => {
  if (!domElementHelper.canUseDom()) return null

  const directionGetter = {
    min: min,
    max: max,
  }

  const propertyGetter = {
    width: domElementHelper.getComputedWidth,
    height: domElementHelper.getComputedHeight,
  }

  if (!propertyGetter[property]) {
    return console.warn(
      `cssPropertyDistributor warning: property has a wrong value. Accepted values are ${Object.keys(
        propertyGetter,
      )}.`,
    )
  }

  const propertyArray = elements.map(el => propertyGetter[property](el))

  const newValue = directionGetter[direction](propertyArray)

  elements.map(el => {
    el.style[property] = pxToRem(newValue)
  })
}
