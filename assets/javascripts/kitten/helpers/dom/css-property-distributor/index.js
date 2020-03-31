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

  const propertyArray = elements.map(el => {
    switch (property) {
      case 'width':
        return domElementHelper.getComputedWidth(el)
      case 'height':
        return domElementHelper.getComputedHeight(el)
      default:
        return null
    }
  })

  const newValue = () => {
    switch (direction) {
      case 'min':
        return min(propertyArray)
      case 'max':
      default:
        return max(propertyArray)
    }
  }

  elements.map(el => {
    el.style[property] = pxToRem(newValue())
  })
}
