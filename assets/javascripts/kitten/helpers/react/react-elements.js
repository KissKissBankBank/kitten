import React from 'react'

export const getReactElementsByType = ({ children, type }) =>
  React.Children.toArray(children).filter(child => child.type === type)

export const getReactElementsWithoutType = ({ children, type }) =>
  React.Children.toArray(children).filter(child => child.type !== type)
