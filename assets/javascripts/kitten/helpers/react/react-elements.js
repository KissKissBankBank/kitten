import React from 'react'
import isFunction from 'lodash/fp/isFunction'
import filter from 'lodash/fp/filter'

export const getReactElementsByType = ({ children, type }) =>
  React.Children.toArray(children).filter(child => child.type === type)

export const getReactElementsWithoutType = ({ children, type }) =>
  React.Children.toArray(children).filter(child => child.type !== type)

export const getReactElementsByTypeArray = ({ children, typeArray }) => {
  return filter(child => typeArray.includes(child.type) || isFunction(child))(
    children,
  )
}

export const getReactElementsWithoutTypeArray = ({ children, typeArray }) => {
  return filter(child => !typeArray.includes(child.type) || isFunction(child))(
    children,
  )
}
