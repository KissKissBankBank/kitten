import React from 'react'

export const getReactElementsByType = ({ children, type }) =>
  React.Children.toArray(children).filter(child => child.type === type)

export const getReactElementsWithoutType = ({ children, type }) =>
  React.Children.toArray(children).filter(child => child.type !== type)

export const getReactElementsByTypeArray = ({ children, typeArray }) =>
  React.Children.toArray(children).filter(child =>
    typeArray.includes(child.type),
  )

export const getReactElementsWithoutTypeArray = ({ children, typeArray }) =>
  React.Children.toArray(children).filter(
    child => !typeArray.includes(child.type),
  )
